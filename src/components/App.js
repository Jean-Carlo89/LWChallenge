import {useState,useEffect} from 'react'
import Header from "./header"
import axios from "axios"
import GlobalStyle from './GlobalStyles';

export default function App() {


  const [dir, setDir] = useState([])
  useEffect(()=>{
    axios.get(" https://hom-escolaaberta.sme.prefeitura.sp.gov.br/api/diretorias/")
    .then((response)=>{
      setDir(response.data.results)
    })
  },[])
  
  return (
   <>
    <GlobalStyle />
    <div className="App">
     <Header/>

    </div>
    </>
  );
}


