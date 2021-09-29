import {useState,useEffect} from 'react'
import styled from "styled-components"
import Header from "./Header"
import axios from "axios"
import GlobalStyle from './GlobalStyles';
//import Table from "./Table"
import Table2 from "./Table2"
//import Select from 'react-select';
import Select2 from "./Select2"
import handleData from "./utils/handleData"
import Footer from "./Footer"

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import "./utils/loader.css"

export default function App() {
  const [dir, setDir] = useState([])
  const [options,setOptions] = useState([])
  const [selected, setSelected] = useState(null)
  const [tableData,setTableData] = useState([])
  const [isLoading,setIsLoading] = useState(true)
  useEffect(()=>{
    console.log(process.env.REACT_APP_API_BASE_URL)
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/diretorias/`)
    .then((response)=>{
     
     const newOptions = response.data.results.map((item)=>{
       return(
         
          { value: item.diretoria, label: item.diretoria, initials:item.dre }
         
       )
     })

     const completeOptions = [{value:"TODAS AS DIRETORIAS",initials:""},...newOptions]
      setOptions(completeOptions)

     setSelected(completeOptions[0])
    })
  },[])

  useEffect( ()=>{
    update()
  },[selected])

  async function update(){
    if(selected===null) return
    setIsLoading(true)
   await axios.get(`${process.env.REACT_APP_API_BASE_URL}/smeescolas/${selected?.initials}`)
    .then((response)=>{

      const filteredData = handleData(response.data.results)
    
    setTableData(filteredData)
   
   setTimeout(()=>{
    setIsLoading(false)
   },500)

    })
  }
  

  return (
   <>
    <GlobalStyle />
    <Container className="App">
     <Header/>
     <Select2
          selected={selected}
          setSelected={setSelected}
          options={options}
          />
    
     {  
        selected!==null
        ?
     
          isLoading 
          ?
            <Loader
                type="Circles"
                color="#00BFFF"
                height={100}
                width={100}
                className="loader"
              />
          :
          <>
          {/* <Select2
          selected={selected}
          setSelected={setSelected}
          options={options}
          /> */}
          <Table2 data={tableData}/>
          </>

        :
        null
      }
          
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
`



