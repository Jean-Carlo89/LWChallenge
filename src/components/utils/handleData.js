export default function handleData(schools){


   const schoolTypes = {}
   let totalByStudents = {}
   let newFiltered=[]
   
   schools.forEach((school,index) => {
       
    schoolTypes[`${school.tipoesc}`] = {
        
            info:{
                id:index+1,
            },
           
           type:school.tipoesc,
           counter:0
       }

      
      
       if(!totalByStudents[`${school.faixa}`]){
           totalByStudents[`${school.faixa}`]=school.count
       }else{
           totalByStudents[`${school.faixa}`]+=school.count
       }
   })

schools.forEach((school)=> {
   if(!schoolTypes[`${school.tipoesc}`].info["totalBytype"]){
       schoolTypes[`${school.tipoesc}`].info["totalBytype"]=0
          }
   
   if(schoolTypes[school.tipoesc]){
       schoolTypes[school.tipoesc].info[`${school.faixa}`]=school.count
       schoolTypes[`${school.tipoesc}`].info["totalBytype"]+=school.count
    }
  })

 schools.forEach((school)=>{
     if(schoolTypes[`${school.tipoesc}`].counter<1){
        newFiltered.push(schoolTypes[`${school.tipoesc}`])
        schoolTypes[`${school.tipoesc}`].counter+=1
     }
 })

 totalByStudents={...totalByStudents,type:"Total por estudante"}
 

  return [newFiltered,totalByStudents]

}