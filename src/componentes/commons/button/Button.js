import styled  from 'styled-components';
import { TextStyleVariantsMap } from '../../foundation/text';



export const Button = styled.button`
    background: ${({ theme }) => theme.colors.background.main.color};
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


`;
