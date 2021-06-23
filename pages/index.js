import React from 'react';
import styled from 'styled-components'
import { Button } from '../src/componentes/commons/button/Button'
import Text from '../src/componentes/foundation/text';

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
    <div  style = {{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>

      <div style = {{
        flex: '1',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        flexDirection: 'column',
    }}>
        <Title> Alura Viagens</Title> 
        <Text variant = "subTitle"tag="h2"> Quando será a viagem? </Text>

        <div style = {{
        flex: '1',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        flexDirection: 'column',
    }}>
          <Text  variant = "paragraph1"tag="p">Data da saida</Text>
          <input></input>
          <Text variant = "paragraph1"tag="p">Data do retorno</Text>
          <input></input>
          <Text  variant = "paragraph1"tag="p">Local de Origem</Text>
          <input></input>
          <Text variant = "paragraph1"tag="p">Local de chegada</Text>
          <input></input>

        </div>
        <subTitle> Como será feito o pagamento? </subTitle>
        <button>Opções de pagamento</button>
        <div
        style = {{
          flex: '1',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          flexDirection: 'column',
      }}
        >

        <Text variant = "subTitle"tag="h2"> Quem vai viajar? </Text>

        <Text variant = "paragraph1"tag="p">Nome</Text>
          <input></input>
          <Text  variant = "paragraph1"tag="p">Sobrenome</Text>
          <input></input>

          <Text variant = "paragraph1"tag="p">pais de residencia</Text>
          <input></input>
          <Text  variant = "paragraph1"tag="p">Data de nascimento</Text>
          <input></input>
          <Text variant = "paragraph1"tag="p">CPF</Text>
          <input></input>
          <Text variant = "paragraph1"tag="p">email</Text>
          <input></input>
          <Text variant = "paragraph1"tag="p">telefone</Text>
          <input></input>
          <Button
          variant= "background.main"
          display="block"
          margin={{
            xs: 'auto',
            md: 'initial',
          }}
          
          
          >Comprar</Button>
        
        
        </div>
      </div>
    </div>
  );
}
