import {useState,useEffect} from 'react'
import Header from "./header"
import axios from "axios"
import GlobalStyle from './GlobalStyles';
import Table from "./Table"
import Table2 from "./Table2"
import Select from 'react-select';
import handleData from "./utils/handleData"

export default function App() {
  const [dir, setDir] = useState([])
  const [options,setOptions] = useState([])
  const [selected, setSelected] = useState({})
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
    axios.get(`https://hom-escolaaberta.sme.prefeitura.sp.gov.br/api/smeescolas/${selected?.initials}`)
    .then((response)=>{
      //console.log(response.data)
      const filteredData = handleData(response.data.results)
     // console.log(filteredData)
    setTableData(filteredData)
    })
  },[selected])
  
  return (
   <>
    <GlobalStyle />
    <div className="App">
     <Header/>
     <button onClick={()=>console.log(options)}> options </button>
     <button onClick={()=>console.log(selected)}> selected </button>
     {/* <Table/> */}
     <Select
      
      onChange={setSelected}
      options={options}
     />
     <Table2 data={tableData}/>

    </div>
    </>
  );
}


