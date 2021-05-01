import styled from 'styled-components'

export const StyledForm = styled.div`
display: flex;
flex-direction: column;
justfiy-content: space-between;
margin: 10 12px;

`
export const StyledInput = styled.input`
    border: unset;
    background: #e73c7e;
    width: 200px;
    height: 45px;
    margin: 3px;
    border-radius: 3%;
    color: white;
    font-weight: bolder;
    margin-bottom: 7px;
    margin-right: 8px;
    -webkit-box-shadow: 1px 1px 2px 3px #ccc; 
    ::placeholder{
        text-align: center;
        color: white;
        font-weight: bolder;
    }
`


