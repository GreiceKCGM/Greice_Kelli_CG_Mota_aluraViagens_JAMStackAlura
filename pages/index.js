import React from 'react';
import styled from 'styled-components';
import { Button } from '../src/componentes/commons/button/Button';
import Text from '../src/componentes/foundation/text';
import { Box } from '../src/componentes/layout/Box';
import Grid from '../src/componentes/layout/Grid';
import FormPagamento from '../src/componentes/patterns/forms/formsPagamento';

const PageStyle = styled.div`
  background: ${({ theme }) => theme.colors.background.main.color};
  width: 100%;
  padding-left: 245px;
  padding-right:245px;


`;

export default function Home() {
  return (
    <PageStyle>

      <Box
        flex="1"
        display="flex"
        // flexWrap="wrap"
        justifyContent="space-between"

      >

        <Grid.Container
          backgroundColor="white"
        // flex: '1',
        //   display: 'flex',
        //   justifyContent: 'space-between',
        //   alignItems: 'center',
        //   flexWrap: 'wrap',
        //   flexDirection: 'column',

        >
          <Grid.Row>
            <Grid.Col flexDirection="row">
              <Text variant="title" tag="h1" color="secondary.main" fontFamily="Pattaya">
                Alura Viagens

              </Text>
              <Text variant="subTitle" tag="p" fontFamily="Roboto"> Quando será a viagem? </Text>

              <Text variant="paragraph1" tag="p">Data da saida</Text>
              <input />
              <Text variant="paragraph1" tag="p">Data do retorno</Text>
              <input />

              <Text variant="paragraph1" tag="p">Local de Origem</Text>
              <input />
              <Text variant="paragraph1" tag="p">Local de chegada</Text>
              <input />
            </Grid.Col>
            <Grid.Col>
              <Text variant="subTitle" tag="h2"> Como será feito o pagamento? </Text>
              <FormPagamento />

            </Grid.Col>
            <Grid.Col>

              <Text variant="subTitle" tag="h2"> Quem vai viajar? </Text>

              <Text variant="paragraph2" tag="p">Nome</Text>
              <input />
              <Text variant="paragraph2" tag="p">Sobrenome</Text>
              <input />

              <Text variant="paragraph2" tag="p">pais de residencia</Text>
              <input />
              <Text variant="paragraph2" tag="p">Data de nascimento</Text>
              <input />
              <Text variant="paragraph2" tag="p">CPF</Text>
              <input />
              <Text variant="paragraph2" tag="p">email</Text>
              <input />
              <Text variant="paragraph2" tag="p">telefone</Text>
              <input />
              <Button
                variant="background.main"
                display="block"
                margin={{
                  xs: 'auto',
                  md: 'initial',
                }}
              >
                Comprar
              </Button>
            </Grid.Col>
          </Grid.Row>

        </Grid.Container>
      </Box>
    </PageStyle>
  );
}
