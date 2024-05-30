import { useState } from 'react'
import {FiSearch} from 'react-icons/fi'
import "./style.css"
import api from "./services/api"

function App() {

  const [input, setInput] = useState("");
  const [cep, setCep] = useState({});

  async function handleSearch() {
    if (input === "") {
      alert("Preencha algum CEP")
      return
    }

    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput("");
    }catch {
      alert("Ops! Erro ao buscar CEP");
      setInput("");
    }
  }


  return (
    <div className="container">

      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input 
          type="text"
          placeholder="Digite seu CEP" 
          value={input}
          onChange={(e) => {
            setInput(e.target.value)
          }}
        />

        <button onClick={handleSearch} className="buttonSearch"><FiSearch size={25} color={"#FFF"} /></button>
      </div>

      {
        Object.keys(cep).length > 0 && (
          <main className="main">
            <h2 className="cep" >CEP: {cep.cep}</h2>
            <span className="rua" >{cep.logradouro}</span>
            <span className="completemento" >Complemento: {cep.complemento}</span>
            <span className="bairro" >{cep.bairro}</span>
            <span className="cidade">{cep.localidade} - {cep.uf}</span>
          </main>
        )
      }

      

    </div>
  )
}

export default App