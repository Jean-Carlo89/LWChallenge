import styled from "styled-components"


export default function TableComponent({data}){
 
  const info = data[0]
  const totals = data[1]
  let getSum;
  if(totals!==undefined){
   getSum = Object.keys(totals)
  }

  let totalSum=0;

  getSum?.forEach((item)=>{
    if(totals[item]!=="Total por estudante"){
      totalSum+=totals[item]
    }
  })

   
    return(
        <Table>
  <thead>
    <tr>
      <TableData inputColor={true}>tipo</TableData>
      <TableData inputColor={true}>Sem estudantes cadastrados</TableData>
      <TableData inputColor={true}>1 a 250 estudantes</TableData>
      <TableData inputColor={true}>251 a 500 estudantes</TableData>
      <TableData inputColor={true}>501 a 1000 estudantes</TableData>
      <TableData inputColor={true}>1001 a 1500 estudantes</TableData>
      <TableData inputColor={true}> 1501 a 2000 estudantes</TableData>
      <TableData inputColor={true}>2001 a 2500 estudantes</TableData>
      <TableData inputColor={true}>Mais que 2500 estudantes</TableData>
      <TableData inputColor={true}>Total de unidades escolares por tipo</TableData>
    </tr>
  </thead>
  <tbody>
  {info?.map(item => {
      return (
        <tr key={item.info.id}>
           <TableData>{ item.type }</TableData>
           <TableData>{!item.info["Sem estudantes cadastrados"] ? 0 : item.info["Sem estudantes cadastrados"]}</TableData>
          <TableData>{ !item.info["1 a 250 estudantes"] ? 0 : item.info["1 a 250 estudantes"]}</TableData>
          <TableData>{ !item.info["251 a 500 estudantes"] ? 0 : item.info["251 a 500 estudantes"]}</TableData>
          <TableData>{ !item.info["501 a 1000 estudantes"] ? 0 : item.info["501 a 1000 estudantes"]}</TableData>
          <TableData>{ !item.info["1001 a 1500 estudantes"] ? 0 : item.info["1001 a 1500 estudantes"]}</TableData>
          <TableData>{ !item.info["1501 a 2000 estudantes"] ? 0 : item.info["1501 a 2000 estudantes"]}</TableData>
          <TableData>{ !item.info["2001 a 2500 estudantes"] ? 0 : item.info["2001 a 2500 estudantes"]}</TableData>
          <TableData>{ !item.info["Mais que 2500 estudantes"] ? 0 : item.info["Mais que 2500 estudantes"]}</TableData>
          <TableData >{ !item.info["totalBytype"] ? 0 : item.info["totalBytype"]}</TableData>
        </tr>
      );
    })}
   
   {totals!==undefined 
   ?
    <tr>
      <TableData inputColor={true}>Total de unidades escolares por n??mero de estudantes</TableData>
      <TableData inputColor={true}> {!totals["Sem estudantes cadastrados"] ? 0 : totals["Sem estudantes cadastrados"]}</TableData>
      <TableData inputColor={true}> {!totals["1 a 250 estudantes"] ? 0 : totals["1 a 250 estudantes"]}</TableData>
      <TableData inputColor={true}> {!totals["251 a 500 estudantes"] ? 0 : totals["251 a 500 estudantes"]}</TableData>
      <TableData inputColor={true}> {!totals["501 a 1000 estudantes"] ? 0 : totals["501 a 1000 estudantes"]}</TableData>
      <TableData inputColor={true}> {!totals["1001 a 1500 estudantes"] ? 0 : totals["1001 a 1500 estudantes"]}</TableData>
      <TableData inputColor={true}> {!totals["1501 a 2000 estudantes"] ? 0 : totals["1501 a 2000 estudantes"]}</TableData>
      <TableData inputColor={true}> {!totals["2001 a 2500 estudantes"] ? 0 : totals["2001 a 2500 estudantes"]}</TableData>
      <TableData inputColor={true}> {!totals["Mais que 2500 estudantes"] ? 0 : totals["Mais que 2500 estudantes"]}</TableData>
      <TableData inputColor={true}> {totalSum}</TableData>
    </tr>
    :null
   }
  </tbody>
</Table>
    );
}

const Table = styled.table`
border-collapse: separate;
-webkit-border-horizontal-spacing:20px;
margin-bottom: 100px;
font-size: 20px;
 
th{
    display:flex;
     border: 1px solid gray;
     justify-content:center;
     width: 150px;
     align-items: center;
}

 tr{
     display:flex;
     
     border: 1px solid gray;
 }

 .white{
  background-color: white
 }
`

const TableData = styled.td`
      display:flex;
     background-color: ${props => props.inputColor ? "white"  :"#D7F0FF"};
     justify-content:center;
     align-items: center;
     width: 150px;
     border: 1px solid gray;

`