const express = require('express')

const app = express()

app.get('/api/customers', (req, res) => {
  const customers = [
    { id:1, firstname: "Arvind", lastname: "Venkatesan"}
  ]
  res.json(customers)
})

const port = 8000
app.listen(port,  () => console.log(`Server started on port ${port}`))