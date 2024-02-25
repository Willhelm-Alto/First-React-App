const express = require("express")
const app = express()
const port = 8000

const cors = require("cors")

const mysql = require("mysql2")
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "rcrudb"
})

app.use(express.json())
app.use(cors())

//Consultar
app.get("/", (req,res)=>{
  const query = "SELECT * FROM pessoas;"
  
  db.query(query,(err, data)=>{
    if(err) return res.json(err)
    return res.json(data)
  })
})

//Adicionar
app.post("/add", (req,res)=>{
  const query ="INSERT INTO pessoas(nome, idade) VALUES(?);"
  const values = [req.body.nome, req.body.idade]
  
  db.query(query, [values], (err, data)=>{
    if(err) return res.json(err)
    return res.json(data)
  })
})

//Excluir
app.delete("/:id", (req,res)=>{
  const idPessoa = req.params.id
  const query = "DELETE FROM pessoas WHERE id = ?"
  
  db.query(query, [idPessoa], (err,data)=>{
    if(err) return res.json(err)
    return res.json(data)
  })
})

//Editar
app.put("/:id", (req,res)=>{
  const idPessoa = req.params.id 
  const query = "UPDATE pessoas SET nome = ?, idade = ? WHERE id = ?;"
  const values = [req.body.nome, req.body.idade] 

  db.query(query, [...values, idPessoa], (err,data)=>{
    if(err) return res.json(err)
    return res.json(data)
  })
})

app.listen(port, ()=>{
  console.log("Conectado ao backend. Porta: "+port)
})
