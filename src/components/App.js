import {useState,useEffect} from 'react'
import styled from "styled-components"
import Header from "./Header"
import axios from "axios"
import GlobalStyle from './GlobalStyles';
import Table from "./Table"
import Table2 from "./Table2"
import Select from 'react-select';
import Select2 from "./Select2"
import handleData from "./utils/handleData"
import Footer from "./Footer"

export default function App() {
  const [dir, setDir] = useState([])
  const [options,setOptions] = useState([])
  const [selected, setSelected] = useState(null)
  const [tableData,setTableData] = useState([])
  useEffect(()=>{
    axios.get("https://hom-escolaaberta.sme.prefeitura.sp.gov.br/api/diretorias/")
    .then((response)=>{
     
     const newOptions = response.data.results.map((item)=>{
       return(
         
          { value: item.diretoria, label: item.diretoria, initials:item.dre }
         
       )
     })
      setOptions(newOptions)
    })
  },[])

  useEffect(()=>{

    if(selected===null) return
    axios.get(`https://hom-escolaaberta.sme.prefeitura.sp.gov.br/api/smeescolas/${selected?.initials}`)
    .then((response)=>{
      //console.log(response.data)
      const filteredData = handleData(response.data.results)
     // console.log(filteredData)
     
    setTableData(filteredData)
    })
  },[selected])

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px dotted pink',
      color: state.isSelected ? 'red' : 'blue',
      width: state.selectProps.width,
      padding: 20,
    }),
  }
  
  return (
   <>
    <GlobalStyle />
    <Container className="App">
     <Header/>
     {/* <Button onClick={()=>console.log(options)}> options </Button>
     <Button onClick={()=>console.log(selected)}> selected </Button> */}
     {/* <Table/> */}
     {/* <Select
      style={customStyles}
      width='200px'
      onChange={setSelected}
      options={options}
     /> */}
     <Select2
     selected={selected}
     setSelected={setSelected}
     options={options}
     />
     <Table2 data={tableData}/>

     <Footer/>

    </Container>
    </>
  );


  
}

const Container = styled.div`
min-height: calc(100vh - 160px);
height: 100%;
margin-top: 80px;
min-width: 800px;
width: 100vw;
display: flex;
margin-bottom: 80px;
flex-direction: column;
overflow-y: scroll;
align-items: center;

border: 1px solid red;
`
const Button = styled.button`
margin-top:80px;
`




