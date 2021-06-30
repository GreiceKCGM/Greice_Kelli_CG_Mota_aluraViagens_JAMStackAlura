import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

export const PageHome = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
flex: 1;
background-color: ${({ theme }) => theme.colors.background.main.color};
`;

export const PageStyle = styled.div`
    width: 100%;
    height: 100%;
    box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.3);
    background-color: ${({ theme }) => theme.colors.tertiary.main.color};
      ${breakpointsMedia({
    xs: css`
          padding: 12px 12px;
        `,
    sm: css`
          padding: 12px 24px;
        `,
    md: css`
          padding: 12px 48px;
        `,
    lg: css`
          padding: 12px 96px;
        `,
    xl: css`
          padding: 12px 192px;
        `,
  })}
    `;
