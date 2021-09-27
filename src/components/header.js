import styled from "styled-components"

export default function Header(){
    return(
        <Container>
            <h1>Teste de ReactJS - AMcomE</h1>
        </Container>
    )
}

const Container = styled.div`
width: 100%;
height: 40px;
background-color: #120a8f;
color: white;
display: flex;
align-items: center;
justify-content: center;

    h1{
        border: 1px solid red;
        font-size: 25px;
    }


`