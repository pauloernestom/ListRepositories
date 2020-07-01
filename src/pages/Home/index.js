import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';


function App(props) {
  const [ usuario, setUsuario] = useState('')
  // [usuario, setUsuario]

  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response))
    
  }
  return (
    <S.Container>
      {/* <p>{ usuario }</p> */}
      {/* <h1>{props.title} {props.user}</h1> */}
      <S.Input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)}/>
      <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
    </S.Container>
  );
}

export default App;
