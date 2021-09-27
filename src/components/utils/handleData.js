export default function handleData(schools){
   // console.log('entrou aqui')
   // console.log(schools)
    const schoolTypes = {}
    const totalByStudents = {}
    
    schools.forEach((school,index) => {
        schoolTypes[`${school.tipoesc}`] = {
            id:index+1,
            type:school.tipoesc
        }

        if(!totalByStudents[`${school.faixa}`]){
            totalByStudents[`${school.faixa}`]=school.count
        }else{
            totalByStudents[`${school.faixa}`]+=school.count
        }
    })
  
schools.forEach((school)=> {
    if(!schoolTypes[`${school.tipoesc}`]["totalBytype"]){
        schoolTypes[`${school.tipoesc}`]["totalBytype"]=0
           }
    
    if(schoolTypes[school.tipoesc]){
        schoolTypes[school.tipoesc][`${school.faixa}`]=school.count
        schoolTypes[`${school.tipoesc}`]["totalBytype"]+=school.count
     }
   })

//    const t = Object.keys(schoolTypes)

//    const newTypes = t.map((item)=>{
//        return(
//            {
               
//            }
//        )
//    })

   return [schoolTypes,totalByStudents,schoolTypes]

}