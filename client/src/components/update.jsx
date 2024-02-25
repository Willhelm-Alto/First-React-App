import './add.css'
import {useState} from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import axios from 'axios'

function Update(){
  const [pessoa, setPessoa] = useState({
    nome: "",
    idade: null
  })

  const handleChange = (e) =>{
     setPessoa((prev)=>({...prev, [e.target.name]: e.target.value}))
  }
  
  const navigate = useNavigate()
  const location = useLocation()
  const pessoaId = location.pathname.split("/")[2]

  const submit = async (e) =>{
    e.preventDefault()
    try {
      await axios.put("http://localhost:8000/" + pessoaId, pessoa)
      navigate("/")
    } catch (err) {
      console.log(err)
    }
  }

  console.log(pessoa)

  return(
    <div className="card">
      <h2>Editar</h2>
      Nome:
      <input type="text" onChange={handleChange} name="nome"/>   
      Idade:
      <input type="number" onChange={handleChange} name="idade"/>
      <button onClick={submit}>Enviar</button>
    </div>
  )
}

export default Update
