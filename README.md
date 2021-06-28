# 🚧 read me under construction 🚧

<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="./src/assets/images/logo.svg" alt="letmeask"></a>
</p>

---

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)](https://letmeask-758f8.web.app/)
[![GitHub Issues](https://img.shields.io/github/issues/luciano-ferreira/letmeask.svg)](https://github.com/luciano-ferreira/letmeask/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/luciano-ferreira/letmeask.svg)](https://github.com/luciano-ferreira/letmeask/pulls)
[![Deploy to Firebase Hosting on merge](https://github.com/Luciano-Ferreira/letmeask/actions/workflows/firebase-hosting-merge.yml/badge.svg)](https://github.com/Luciano-Ferreira/letmeask/actions/workflows/firebase-hosting-merge.yml)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> Every question has a answer. Written in Reactjs with Firebase.
    <br> 
</p>

## 📝 Table of Contents

- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [TODO](../TODO.md)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)


## 🎈 Usage <a name="usage"></a>

<div align="center" >
  <img src="./.github/letmeask.gif" alt="demo-web" height="460" width="100%">
</div>

Write about 1-2 paragraphs describing the purpose of your project.

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them.

```
Give examples
```

### Installing

A step by step series of examples that tell you how to get a development env running.

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo.

## 🔧 Running the tests <a name = "tests"></a>

Explain how to run the automated tests for this system.

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```



## 🚀 Deployment <a name = "deployment"></a>

Add additional notes about how to deploy this on a live system.

## ⛏️ Built Using <a name = "built_using"></a>

- [MongoDB](https://www.mongodb.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [VueJs](https://vuejs.org/) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>

- [@Luciano](https://github.com/luciano-ferreira)


## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- Hat tip to anyone whose code was used
- Inspiration
- References



[Layout of application](https://www.figma.com/file/u0BQK8rCf2KgzcukdRRCWh/Letmeask/duplicate)




## Rules of Real Time Database
```json
{
  "rules": {
    "rooms": {
      ".read": false,
      ".write": "auth != null",
      "$roomId": {
        ".read": true,
        ".write": "auth != null && (!data.exists() || data.child('authorId').val() == auth.uid)",
        "questions": {
          ".read": true,
          ".write": "auth != null && (!data.exists() ||data.parent().child('authorId').val() == auth.uid)",
          "likes": {
            ".read": true,
            ".write": "auth != null && (!data.exists() || data.child('authorId').val() == auth.uid)",
          }
        }
      }
    }
  }
}
```

[child added](https://firebase.google.com/docs/database/admin/retrieve-data#node.js)

## development tips

- dark theme

- PWA

- responsiveness

- other databases (supabase, faunadb, firestore)

- styled components

- ESLint, prettier <!--https://www.youtube.com/watch?v=1nVUfZg2dSA-->
