import './add.css'
import './get.css'
import axios from 'axios' 
import {useState, useEffect} from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Get() {
  const [records, setRecords] = useState([])
  
  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const res = await axios.get("http://localhost:8000/")
        setRecords(res.data)
        console.log(res)
      } catch (err) {
        console.log(err)
      }
    }
    fetchRecords()
}, [])
  
  const deletar = async (id)=>{
    try {
      await axios.delete("http://localhost:8000/" + id)
      window.location.reload()
    } catch (err) {
     console.log(err) 
    }
  }

  return(
    <>
      <div className="card">
        <h2>Registros de pessoas</h2>
        {records.map((record) => (
          <span className="reg">
            <span className="nome">Nome: </span> {record.nome} 
            <span className="idade">Idade: </span> {record.idade}
            <span className="btns">
              <button id="edit">
                <Link to={`/update/${record.id}`}>
                  <FaEdit/>
                </Link>
              </button> 
              <button id="delete" onClick={()=>deletar(record.id)}>
                <FaTrash/>
              </button>
            </span>
          </span>
        ))}
        <button><Link to='/add'>Adicionar</Link></button>
      </div>
    </> 
  )
}

export default Get
