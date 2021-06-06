import styled from 'styled-components'
import { Field } from 'react-final-form'

const StyledH2 = styled.h2`
    padding: 0 0 20px 0;
    margin: 0;
    font-size: 20px;
`;

const StyledMyForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #a0a0de;
    border: 2px solid black;
    width: 80vw;
    padding: 20px;

    @media (min-width: 1024px){
    width: 15vw;
    }
`;

const StyledInput = styled.input`
    width: 80%;
    /* height:15px; */
    font-size: 13px;
    background-color: white;
    border:1px solid black;
    margin: 5px;
`;

const StyledOption = styled.option`
    width: 100%;
    /* height:15px; */
    font-size: 13px;
    background-color: white;
    border:1px solid black;
`;

const StyledSelect = styled(Field)`
    width: 80%;
    /* height:15px; */
    font-size: 13px;
    background-color: white;
    border:1px solid black;
`;

const StyledSubmit = styled.button`
    font-size: 13px;
    font-weight: 600;
    background-color: white;
    border:1px solid black;
    padding: 10px;
    margin: 20px 0 0 0;
`;

const StyledAlert = styled.div`
    width: 80%;
    background-color: ${({ isErr }) => isErr ? '#e39e9a' : '#b6de95'} ;
    border: 1px solid #f06a62;
    margin: 10px;
    padding: 5px;
    color: #6e1e19;
`;


export { StyledMyForm, StyledInput, StyledH2, StyledOption, StyledSelect, StyledSubmit, StyledAlert }