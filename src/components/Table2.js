import styled from "styled-components"


export default function Table2({data}){
  
    const types = data[2]
   console.log('types')
   console.log(data)
   console.log(types)
  
 
   
    const arrayWithData = [
    {
        id:1,
      tipo: "Educação infantil",
      NoStudents: "4",
      lessThan250:"233",
      lessThan500:"5645",
      lessThan1000:"5456",
      lessThan1500:"456456",
      lessThan2000:"56",
      lessThan2500:"34",
      lessThan2000:"344",
      moreThan2500: "11"
    },
    {
      id:2,
        tipo: "CEUs",
      NoStudents: "6",
      lessThan250:"233",
      lessThan500:"5645",
      lessThan1000:"5456",
      lessThan1500:"456456",
      lessThan2000:"56",
      lessThan2500:"34",
      lessThan2000:"344",
      moreThan2500: "11"
    }
  ]
   
   
    return(
        <Table>
  <thead>
    <tr>
      <th>tipo</th>
      <th>Sem estudantes cadastrados</th>
      <th>1 a 250 estudantes</th>
      <th>251 a 500 estudantes</th>
      <th>501 a 1000 estudantes</th>
      <th>1001 a 1500 estudantes</th>
      <th>1501 a 2000 estudantes</th>
      <th>2001 a 2500 estudantes</th>
      <th>Mais de 2500 estudantes</th>
    </tr>
  </thead>
  <tbody>
    {arrayWithData.map(item => {
      return (
        <tr key={item.id}>
           <td>{ item.tipo }</td>
          <td>{ item.NoStudents }</td>
          <td>{ item.lessThan250 }</td>
          <td>{ item.lessThan500 }</td>
          <td>{ item.lessThan1000}</td>
          <td>{ item.lessThan1500}</td>
          <td>{ item.lessThan2000}</td>
          <td>{ item.lessThan2500}</td>
          <td>{ item.moreThan2500}</td>
        </tr>
      );
    })}
  </tbody>
</Table>
    );
}

const Table = styled.table`
border-collapse: separate;
-webkit-border-horizontal-spacing:20px;
font-size: 30px;
 
th{
    display:flex;
     border: 1px solid gray;
     justify-content:center;
     width: 180px;
     align-items: center;
}

 tr{
     display:flex;
     
     border: 1px solid gray;
 }
 
 td{
    
    display:flex;
     background-color: #D7F0FF;
     justify-content:center;
     align-items: center;
     width: 180px;
    
     border: 1px solid gray;
 }
`