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