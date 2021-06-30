import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { TextStyleVariantsMap } from '../../foundation/text';
import { propToStyle } from '../../../theme/utils/propToStyle';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

export const Button = styled.button`
    width:145px;
    background-color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
    border:0;
    border-radius: ${({ theme }) => theme.borderRadius};
    color:  ${({ theme }) => theme.colors.tertiary.main.color};
    cursor: pointer;
    font-family: Roboto;
    font-weight: bold;
    padding: 12px 26px;
    opacity:1;
    transition: opacity ${({ theme }) => theme.transition};
    &:hover,
    &:focus {
        opacity: 0.6;
    }

    ${TextStyleVariantsMap.paragraph1}

    &:disabled {
    cursor: not-allowed;
    opacity: .2;
  }
  ;
  ${breakpointsMedia({
    xs: css`
      ${({ fullWidth }) => fullWidth && css`
    width: 100%;
        `}
      `,
    md: css`
      ${({ fullWidth }) => fullWidth && css`
    width: 145px;
  `};
    `,

  })};

    ${propToStyle('margin')}
    ${propToStyle('display')}
    ${propToStyle('marginTop')}


`;
