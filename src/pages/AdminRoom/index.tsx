import { useHistory, useParams } from 'react-router-dom';

import { Button } from '../../components/Button';
import { RoomCode } from '../../components/RoomCode';
import { Question } from '../../components/Question';
import { useRoom } from '../../hooks/useRoom';
import { database } from '../../services/firebase';

import logoImg from '../../assets/images/logo.svg';
import deleteImg from '../../assets/images/delete.svg';
import checkImg from '../../assets/images/check.svg';
import answerImg from '../../assets/images/answer.svg';

import './styles.scss';


type RoomParams = {
	id: string;
}

export function AdminRoom() {	
	const history = useHistory();
	const params = useParams<RoomParams>();
	
	const roomId = params.id;
	const { title, questions } = useRoom(roomId);

	async function handleEndRoom() {
		database.ref(`rooms/${roomId}`).update({
			endedAt: new Date(),
		})

		history.push('/')
	}

	async function handleDeleteQuestion(questionId: string) {
		if (window.confirm('Você tem certeza que você deseja remover esta pergunta?')) {
			await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
		}
	}

	async function handleCheckQuestionAsAnswered(questionId: string) {
		await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
			isAnswered: true,
		})
	}

	async function handleHighlightQuestion(questionId: string) {
		await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
			isHighLighted: true,
		})
	}




	return (
		<div id="page-room">
			<header>
				<div className="content">
					<img src={logoImg} alt="Let me ask" />
					<div>
            <RoomCode code={roomId}/>
            <Button 
							isOutlined
							onClick={handleEndRoom}
						>
							Encerrar sala
						</Button>
          </div>
				</div>
			</header>

			<main>
				<div className="room-title">
					<h1>Sala {title}</h1>
					{questions.length > 0 && <span>{questions.length} perguntas</span>}
				</div>
				<div className="question-list">
					{questions.map(question => {
						return (
							<Question
								key={question.id}
								content={question.content}
								author={question.author}
								isAnswered={question.isAnswered}
								isHighLighted={question.isHighLighted}
							>
								{!question.isAnswered && (
									<>
										<button
											type="button"
											onClick={() => handleCheckQuestionAsAnswered(question.id)}
										>
											<img src={checkImg} alt="Marcar pergunta como respondida" />
										</button>
										<button
											type="button"
											onClick={() => handleHighlightQuestion(question.id)}
										>
											<img src={answerImg} alt="Dar destaque a pergunta" />
										</button>
									</>
								)}
								<button
									type="button"
									onClick={() => handleDeleteQuestion(question.id)}
								>
									<img src={deleteImg} alt="Remover pergunta" />
								</button>
							</Question>
						)
					})}
				</div>
			</main>
		</div>
	);
}