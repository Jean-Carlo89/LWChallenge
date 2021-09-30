import styled from "styled-components"

export default function Footer(){
    return(
        <Container >
            <h1>Secretaria Municipal de Educação - SME</h1>
        </Container>
    )
}


const Container = styled.div`
width: 100%;
height: 80px;
background-color: #A9A9A9;
color: white;
display: flex;
align-items: center;
justify-content: center;
position: fixed;
bottom: 0;
right: 0;
z-index:10;


    h1{
        
        font-size: 45px;
    }


`
