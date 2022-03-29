/* eslint-disable react/jsx-key */

import { useState } from 'react'
import Pessoa from '../components/Pessoa'
import comAutorizacao from '../hoc/comAutorizacao'

function Home() {
  const [idadeCaick, setIdadeCaick] = useState(17)
  const pessoas = [
    {
      nomePessoa: 'Sherlaine',
      idadePessoa: 39
    },
    {
      nomePessoa: 'Broocisfilde ',
      idadePessoa: 19
    },
    {
      nomePessoa: 'Carimbo miguel',
      idadePessoa: 22
    }
  ]

  const incrementaIdadeCaick = () => {
    setIdadeCaick(++idadeCaick)
  }

  return (
    <>
      <h1>Olá mundo!{process.env.NEXT_PUBLIC_TESTE} </h1>
      <Pessoa nome='Caick' idade={idadeCaick}/>
      <Pessoa nome='Douglas' idade={25}/>

    
      {pessoas.map(({ nomePessoa, idadePessoa}, index) => {
      return <Pessoa 
      nome={nomePessoa} 
      idade={idadePessoa}
      key={index} 
      />
})}

      <button onClick={incrementaIdadeCaick}>Incrementa idade do Caick</button>
    </>
  )
}

export default comAutorizacao(Home)
