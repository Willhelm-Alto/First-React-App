import './add.css'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

function Add(){
  const [pessoa, setPessoa] = useState({
    nome: "",
    idade: null
  })
  
  const handleChange = (e) =>{
     setPessoa((prev)=>({...prev, [e.target.name]: e.target.value}))
  }
  
  const navigate = useNavigate()

  const submit = async (e) =>{
    e.preventDefault()
    try {
      await axios.post("http://localhost:8000/add", pessoa)
      navigate("/")
    } catch (err) {
      console.log(err)
    }
  }

  console.log(pessoa)

  return(
    <div className="card">
      <h2>Adicionar</h2>
      Nome:
      <input type="text" onChange={handleChange} name="nome"/>   
      Idade:
      <input type="number" onChange={handleChange} name="idade"/>
      <button onClick={submit}>Enviar</button>
    </div>
  )
}

export default Add
