import styled from "styled-components";

export const Button = styled.button`
    font-size: 18px;
    padding: 7px 12px;
    margin-left: 10px;
    background-color: orangered;
    border: 0;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    transition: background-color linear 250ms;
    &:hover {
        background-color: #c20a4e;
    }
`;