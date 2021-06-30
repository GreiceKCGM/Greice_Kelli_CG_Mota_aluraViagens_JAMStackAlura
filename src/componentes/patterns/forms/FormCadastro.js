import React from 'react';
// import { createGlobalStyle } from 'styled-components';
import Text from '../../foundation/text';
import TextField from '../../forms/textField';
import FormPagamento from './formsPagamento';
import { Button } from '../../commons/button/Button';
import { Box } from '../../layout/Box';
import { PageHome, PageStyle } from '../../commons/pagestyle/pageStyle';
import Grid from '../../layout/Grid';

// const LockScroll = createGlobalStyle`
//   body {
//     overflow: hidden;
//   }
// `;

function FormContent() {
  const [userInfo, setUserInfo] = React.useState({
    dataSaida: '',
    dataRetorno: '',
    localOrigem: '',
    localChegada: '',
    name: '',
    sobrenome: '',
    paisResidencia: '',
    dataNascimento: '',
    cpf: '',
    email: '',
    telefone: '',

  });

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    });
  }

  // const isFormInvalid = userInfo.dataSaida.length === 0 || userInfo.dataRetorno.length === 0 ||

  return (
    <PageStyle>

      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        {/* <LockScroll /> */}
        <Text
          variant="title"
          tag="h1"
          color="secondary.main"
          fontFamily="Pattaya"
        >
          Alura Viagens
        </Text>
        <Box>
          <Text
            variant="subTitle"
            tag="p"
          >
            {' '}
            Quando será a viagem?
          </Text>
        </Box>
        <Grid.Row
          flexDirection={{
            xs: 'column',
            md: 'row',
          }}
        >
          <Grid.Col>

            <Text
              variant="paragraph1"
              tag="p"
            >
              Data da saida
            </Text>
            <TextField
              placeholder="dd/mm/yyyy"
              name="dataSaida"
              value={userInfo.dataSaida}
              onChange={handleChange}
            />
          </Grid.Col>
          <Grid.Col>

            <Text
              variant="paragraph1"
              tag="p"
            >
              Data do retorno
            </Text>
            <TextField
              placeholder="dd/mm/yyyy"
              name="dataRetorno"
              value={userInfo.dataRetorno}
              onChange={handleChange}
            />
          </Grid.Col>
        </Grid.Row>

        <Grid.Row
          flexDirection={{
            xs: 'column',
            md: 'row',
          }}

        >
          <Grid.Col>
            <Text
              variant="paragraph1"
              tag="p"
            >
              Local de Origem
            </Text>
            <TextField
              placeholder=""
              name="localOrigem"
              value={userInfo.localOrigem}
              onChange={handleChange}
            />

          </Grid.Col>
          <Grid.Col>

            <Text
              variant="paragraph1"
              tag="p"
            >
              Local de Chegada
            </Text>
            <TextField
              placeholder=""
              name="localChegada"
              value={userInfo.localChegada}
              onChange={handleChange}
            />
          </Grid.Col>
        </Grid.Row>
        <Box>
          <Text
            variant="subTitle"
            tag="p"
            marginBottom="20px"
          >
            Como será feito o pagamento?

          </Text>
        </Box>
        <FormPagamento />

        <Box>
          <Text
            variant="subTitle"
            tag="p"
          >
            {' '}
            Quem vai viajar?
          </Text>

        </Box>

        <Text
          variant="paragraph2"
          tag="p"
        >
          Nome
        </Text>
        <TextField
          placeholder="Nome"
          name="name"
          value={userInfo.name}
          onChange={handleChange}
        />
        <Text
          variant="paragraph2"
          tag="p"
        >
          Sobrenome
        </Text>
        <TextField
          placeholder="sobrenome"
          name="sobrenome"
          value={userInfo.sobrenome}
          onChange={handleChange}
        />

        <Grid.Row
          flexDirection={{
            xs: 'column',
            md: 'row',
          }}
        >
          <Grid.Col>

            <Text
              variant="paragraph2"
              tag="p"
            >
              pais de residencia
            </Text>
            <TextField
              placeholder=""
              name="paisResidencia"
              value={userInfo.paisResidencia}
              onChange={handleChange}
            />
          </Grid.Col>
          <Grid.Col>

            <Text
              variant="paragraph2"
              tag="p"
            >
              Data de nascimento
            </Text>
            <TextField
              placeholder="dd/mm/yyyy"
              name="dataNascimento"
              value={userInfo.dataNascimento}
              onChange={handleChange}
            />
          </Grid.Col>

        </Grid.Row>

        <Text
          variant="paragraph2"
          tag="p"
        >
          CPF
        </Text>
        <TextField
          placeholder="000.000.000-00"
          name="cpf"
          value={userInfo.cpf}
          onChange={handleChange}
        />
        <Text
          variant="paragraph2"
          tag="p"
        >
          Email
        </Text>
        <TextField
          placeholder="exemplo@dominio.com"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
        />
        <Text
          variant="paragraph2"
          tag="p"
        >
          telefone
        </Text>
        <TextField
          placeholder="(__)____-____"
          name="telefone"
          value={userInfo.telefone}
          onChange={handleChange}
        />

        <Button
          variant="background.main"
          type="submit"
        // disable={isFormInvalid}
          display="block"
          margin={{
            xs: 'auto',
            md: 'initial',
          }}
          fullWidth
        >
          Comprar
        </Button>

      </form>
    </PageStyle>

  );
}

export default function FormCadastro() {
  return (
    <PageHome>
      <Grid.Container
        flex="1"
        // display="flex"
        // flexWrap="wrap"
      >

        <Box
          flex="1"
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
        >

          <FormContent />

        </Box>

      </Grid.Container>
    </PageHome>

  );
}
