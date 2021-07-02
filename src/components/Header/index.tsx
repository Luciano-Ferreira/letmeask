import { ReactNode } from 'react';
import './styles.scss';

type HeaderProps = {
  children?: ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (
    <header>
      <div className="content">
        {children}
      </div>
    </header>
  );
}