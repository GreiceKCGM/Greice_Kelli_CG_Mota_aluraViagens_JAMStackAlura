import styled  from 'styled-components';
import get from 'lodash/get';


export const Button = styled.button`
    background: #35B6FF;
    border:0;
    border-radius: ${({ theme }) => theme.borderRadius};
    color: #FFFFFF;
    cursor: pointer;
    font-weight: bold;
    padding: 12px 26px;
    opacity:1;
    transition: opacity ${({ theme }) => theme.transition};
    &:hover,
    &:focus {
        opacity: 0.6;
    }


`;
