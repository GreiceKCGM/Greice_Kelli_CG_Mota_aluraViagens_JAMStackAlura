import React from 'react';
import PropTypes from 'prop-types';
import { InputPagamentos, TiposPagamentoWrapper } from './styles';
import Text from '../../foundation/text';

export default function TiposPagamento({
  onClick, name, value, img, ...props
}) {
  return (
    <TiposPagamentoWrapper
      onClick={onClick}
      data-click-area="true"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}

    >
      <InputPagamentos
        type="radio"
        name={name}
        value={value}
        img={img}
      />
      {
        (
            img
          && (<img src={img} alt={value} />)
        )
      }
      <Text variant="smallestException" tag="span">
        {' '}
        {value}
        {' '}
      </Text>

    </TiposPagamentoWrapper>
  );
}

TiposPagamento.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  img: PropTypes.string,
  onClick: PropTypes.func.isRequired,

};

TiposPagamento.defaultProps = {
  img: 'null',
};
