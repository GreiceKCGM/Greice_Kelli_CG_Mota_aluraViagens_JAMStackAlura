import React from 'react';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { propToStyle } from '../../../theme/utils/propToStyle';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

export const TextStyleVariantsMap = {
    title: css`
    ${({ theme }) => css`
      font-size: ${theme.typographyVariants.titleXS.fontSize};
      font-weight: ${theme.typographyVariants.titleXS.fontWeight};
      line-height: ${theme.typographyVariants.titleXS.lineHeight};
    `}
    ${breakpointsMedia({
      md: css`
        ${({ theme }) => css`
          font-size: ${theme.typographyVariants.title.fontSize};
          font-weight: ${theme.typographyVariants.title.fontWeight};
          line-height: ${theme.typographyVariants.title.lineHeight};
        `}
      `,
    })}
  `,

    paragraph1: css`
        font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
        font-weight: ${({ theme }) => theme.typographyVariants.paragraph1.fontWeight};
        line-height: ${({ theme }) => theme.typographyVariants.paragraph1.lineHeight};
    `,

    smallestException: css`
        font-size: ${({ theme }) => theme.typographyVariants.smallestException.fontSize};
        font-weight: ${({ theme }) => theme.typographyVariants.smallestException.fontWeight};
        line-height: ${({ theme }) => theme.typographyVariants.smallestException.lineHeight};
    `,
};

const TextBase = styled.span `
     ${(props) => TextStyleVariantsMap[props.variant]}
     color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
     ${propToStyle('textAlign')}

`;


export default function Text( { tag, variant, children, ...props }) {
    return (
        <TextBase
        as={tag}
        variant = {variant}
        {...props }
        >
            {children}
        </TextBase>
    );

}

Text.propTypes = {
    tag: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

Text.dafaultProps = {
    tag : 'span',
    variant: 'paragraph1',
}