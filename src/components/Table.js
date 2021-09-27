import { AddBox, ArrowDownward } from "@material-ui/icons";
import MaterialTable from "material-table";

export default function Table(){
    return(
        <MaterialTable
        columns={[
            { title: "tipo", field: "tipo" },
            { title: "Sem estudantes cadastrados", field: "NoStudents" },
            { title: "1 a 250 estudantes", field: "lessThan250" },
            { title: "251 a 500 estudantes", field: "lessThan500" },
            { title: "501 a 1000 estudantes", field: "lessThan1000" },
            { title: "1001 a 1500 estudantes", field: "lessThan1500" },
            { title: "1501 a 2000 estudantes", field: "lessThan2000" },
            { title: "2001 a 2500 estudantes", field: "lessThan2500" },
            { title: "Mais de 2500 estudantes", field: "moreThan2500" },
            
           
          ]}
          data={[
            {
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
          ]}
          options={
            {search: false}
          }
          title="Demo Title"/>
    )
}