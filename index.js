const express = require('express')
const app = express()

const contacts = [
  {
    "id": 1,
    "fName": "Jarri",
    "mint": "",
    "lName": "Jallow",
    "primaryPhone": "2340083",
    "secondaryPhone": "",
    "email": "jarrijallow124@gmail.com",
    "address": "Old Jeswang"
  }
]

app.get('/', (request, response) => {
  response.send('<h1>Welcome</h1>')
})

app.get("/api/contacts", (request, response) => {
  response.json(contacts)
})


const PORT = 3003
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
