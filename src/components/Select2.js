import React, { useState } from "react";
import styled from "styled-components";

const Main = styled("div")`
  font-family: sans-serif;
  margin-top:120px;
  background: #f0f0f0;
  display: flex;
  flex-direction: column;
  height: 30px;
  width: fit-content;
  border-radius: 20px;
  margin: 10px;


  h1{
      font-size: 15px;
      margin:0 40px;
      margin-top:5px;
      display: flex;
      align-items: center;
      justify-content: center;
  }
`;

const DropDownContainer = styled("div")`
  width: 10.5em;
  width: 300px;
  z-index: 3;
  
`;

const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;
  background: #ffffff;
`;

const DropDownListContainer = styled("div")`
margin-left: 0;
`;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  z-index:2;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 15px;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  z-index: 2;
  margin-bottom: 0.8em;
`;



export default function Select2(props) {
  const [isOpen, setIsOpen] = useState(false);
  const options = props.options
  const toggling = () => setIsOpen(!isOpen);

  function onOptionClicked(option)  {
    props.setSelected(option);
    setIsOpen(false);
  };

  return (
    <Main onClick={toggling}>
      <h1 >{props.selected?.value || "Escolha a diretoria"}</h1>
      <DropDownContainer>
       {isOpen 
        
        ? <DropDownListContainer>
        <DropDownList>
          {options.map(option => (
            <ListItem onClick={()=>onOptionClicked(option)} key={Math.random()}>
              {option.value}
            </ListItem>
          ))}
        </DropDownList>
      </DropDownListContainer>
      :
      null
    }
      </DropDownContainer>
    </Main>
  );
}