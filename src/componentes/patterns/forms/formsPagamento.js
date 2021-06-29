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
  return (
    <FormPagamentoWrapper>

      <TiposPagamento
        start_round_edge
        name="tipoPagamento"
        value="Transferência"
        img="transferencia.png"
      />
      <TiposPagamento
        name="tipoPagamento"
        value="Cartão"
        img="cartao.png"
      />
      <TiposPagamento
        end_round_edge
        name="tipoPagamento"
        value="PayPal"
        img="paypal.png"
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
