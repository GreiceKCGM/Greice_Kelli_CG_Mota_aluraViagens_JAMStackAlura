import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../foundation/text';
import { propToStyle } from '../../theme/utils/propToStyle';

const InputWrapper = styled.div`
  margin-bottom: 17px;
  ${propToStyle('marginBottom')}
  
 
`;

const Input = styled(Text)`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.borders.main.color};
  padding: 12px 16px;
  outline: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  ${propToStyle('marginBottom')}
`;

Input.defaultProps = {
  tag: 'input',
  variant: 'paragraph1',
};

export default function TextField({
  type,
  placeholder,
  name,
  onChange,
  min,
  max,
  value,
  marginBottom,
}) {
  return (
    <InputWrapper>
      <Input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        min={min}
        max={max}
        value={value}
        marginBottom={marginBottom}
      />
    </InputWrapper>
  );
}

TextField.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.string,
  max: PropTypes.string,
  value: PropTypes.string.isRequired,
  marginBottom: PropTypes.string,
};

TextField.defaultProps = {
  min: '',
  max: '',
  marginBottom: '',
};
