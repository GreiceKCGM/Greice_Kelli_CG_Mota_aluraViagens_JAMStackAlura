import React from 'react';
import styled from 'styled-components';
import TiposPagamento from '../../forms/tiposPagamento/tiposPagamento';

const FormPagamentoWrapper = styled.div`
    display: flex;
    margin-top: -10px;
    margin-bottom:30px;
    flex-direction: row;
`;

export default function FormPagamento() {
  const [userInfo, setUserInfo] = React.useState({ tipoPagamentoSelected: '' });

  function handleClick(event) {
    const isClickArea = event.target.closest('[data-click-area="true"]');
    setUserInfo({
      ...userInfo,
      tipoPagamentoSelected: isClickArea.firstChild.value,
    });
  }
  return (
    <FormPagamentoWrapper>

      <TiposPagamento
        start_round_edge
        name="tipoPagamento"
        value="Transferência"
        img="transferencia.png"
        onClick={handleClick}
        selected={userInfo.tipoPagamentoSelected === 'Transferência'}
      />
      <TiposPagamento
        name="tipoPagamento"
        value="Cartão"
        img="cartao.png"
        onClick={handleClick}
        selected={userInfo.tipoPagamentoSelected === 'Cartão'}
      />
      <TiposPagamento
        end_round_edge
        name="tipoPagamento"
        value="PayPal"
        img="paypal.png"
        onClick={handleClick}
        selected={userInfo.tipoPagamentoSelected === 'PayPal'}
      />
    </FormPagamentoWrapper>

  );

  // start_round_edge
  // name="tipo-pagamento"
  // value="Transferência"
  // srcimg="images/transferencia.png"
  // selected={formData.tipoPagamentoSelected === 'Transferência'}
  // onClick={handleClick}
}
