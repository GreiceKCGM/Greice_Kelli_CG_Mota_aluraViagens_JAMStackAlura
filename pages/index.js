import React from 'react';
import styled from 'styled-components'
import { Button } from '../src/componentes/commons/button/Button'

const Title = styled.h1`
  font-family: Pattaya;
  font-size: 72px;
  color: ${({ theme }) => theme.colors.secondary.main.color};
`
const subTitle = styled.h2`
  font-family: Roboto;
  font-size: 24px ;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return (
    <div >

      <div>
        <Title> Alura Viagens</Title> 
        <subTitle> Quando será a viagem? </subTitle>
        <div>
          <p>Data da saida</p>
          <input></input>
          <p>Data do retorno</p>
          <input></input>
        </div>
        <subTitle> Como será feito o pagamento? </subTitle>
        <button>Opções de pagamento</button>
        <div>

        <subTitle> Quem vai viajar? </subTitle>

        <p>Nome</p>
          <input></input>
          <p>Sobrenome</p>
          <input></input>

          <p>pais de residencia</p>
          <input></input>
          <p>Data de nascimento</p>
          <input></input>
          <p>CPF</p>
          <input></input>
          <p>email</p>
          <input></input>
          <p>telefone</p>
          <input></input>
          <Button>Comprar</Button>
        
        
        </div>
      </div>
    </div>
  );
}
