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

  const todayIso8601 = new Date().toISOString().split('T')[0];

  function emailIsInvalid() {
    return userInfo.email.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userInfo.email);
  }

  // function cpfMask = value => {
  //   // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
  // }

  function isValidCPF(cpfMask) {
    return userInfo.cpf.length === 11;
  }

  function formataCPF(cpf) {
    return cpf
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1'); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
  }

  function handleChangeCPF(event) {
    setUserInfo({
      ...userInfo,
      cpf: formataCPF(event.target.value),
    });
  }

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
              tag="label"
            >
              Data da saida
            </Text>
            <TextField
              type="date"
              placeholder="DD/MM/YYYY"
              name="dataSaida"
              min={todayIso8601}
              value={userInfo.dataSaida}
              onChange={handleChange}
            />
          </Grid.Col>
          <Grid.Col>

            <Text
              variant="paragraph1"
              tag="label"
            >
              Data do retorno
            </Text>
            <TextField
              type="date"
              placeholder="DD/MM/YYYY"
              name="dataRetorno"
              min={todayIso8601}
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
              tag="label"
            >
              Local de Origem
            </Text>
            <TextField
              type="text"
              placeholder=""
              name="localOrigem"
              value={userInfo.localOrigem}
              onChange={handleChange}
            />

          </Grid.Col>
          <Grid.Col>

            <Text
              variant="paragraph1"
              tag="label"
            >
              Local de Chegada
            </Text>
            <TextField
              type="text"
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
          tag="label"
        >
          Nome
        </Text>
        <TextField
          type="text"
          placeholder="Nome"
          name="name"
          value={userInfo.name}
          onChange={handleChange}
        />
        <Text
          variant="paragraph2"
          tag="label"
        >
          Sobrenome
        </Text>
        <TextField
          type="text"
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
              tag="label"
            >
              Pais de residencia
            </Text>
            <TextField
              type="text"
              placeholder=""
              name="paisResidencia"
              value={userInfo.paisResidencia}
              onChange={handleChange}
            />
          </Grid.Col>
          <Grid.Col>

            <Text
              variant="paragraph2"
              tag="label"
            >
              Data de nascimento
            </Text>
            <TextField
              type="date"
              placeholder="DD/MM/YYYY"
              name="dataNascimento"
              max={todayIso8601}
              value={userInfo.dataNascimento}
              onChange={handleChange}
            />
          </Grid.Col>

        </Grid.Row>

        <Text
          variant="paragraph2"
          tag="label"
        >
          CPF
        </Text>
        <TextField
          type="text"
          placeholder="000.000.000-00"
          name="cpf"
          value={userInfo.cpf}
          onChange={handleChangeCPF}
        />

        <Text
          variant="paragraph2"
          tag="label"
        >
          Email
        </Text>
        <Box
          paddingTop="2px"
          marginBottom="10px"

        >
          <TextField
            type="text"
            placeholder="exemplo@dominio.com"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
            marginBottom="0px"
          />

          {emailIsInvalid() && (
            <Text
              variant="paragraph2"
              tag="span"
              color="error.main"
            >
              E-mail inválido!
            </Text>
          ) }

        </Box>
        <Text
          variant="paragraph2"
          tag="label"
        >
          Telefone
        </Text>
        <TextField
          type="text"
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
