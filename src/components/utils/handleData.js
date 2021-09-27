export default function handleData(schools){
//    // console.log('entrou aqui')
//    // console.log(schools)
//     const schoolTypes = {}
//     const totalByStudents = {}
    
//     schools.forEach((school,index) => {
//         schoolTypes[`${school.tipoesc}`] = {
//             id:index+1,
//             type:school.tipoesc
//         }

//         if(!totalByStudents[`${school.faixa}`]){
//             totalByStudents[`${school.faixa}`]=school.count
//         }else{
//             totalByStudents[`${school.faixa}`]+=school.count
//         }
//     })
  
// schools.forEach((school)=> {
//     if(!schoolTypes[`${school.tipoesc}`]["totalBytype"]){
//         schoolTypes[`${school.tipoesc}`]["totalBytype"]=0
//            }
    
//     if(schoolTypes[school.tipoesc]){
//         schoolTypes[school.tipoesc][`${school.faixa}`]=school.count
//         schoolTypes[`${school.tipoesc}`]["totalBytype"]+=school.count
//      }
//    })

// //    const t = Object.keys(schoolTypes)

// //    const newTypes = t.map((item)=>{
// //        return(
// //            {
               
// //            }
// //        )
// //    })

//    return [schoolTypes,totalByStudents,schoolTypes]












    // console.log('entrou aqui')
   // console.log(schools)
   const schoolTypes = {}
   const totalByStudents = {}
   
   schools.forEach((school,index) => {
       
    schoolTypes[`${school.tipoesc}`] = {
        
            info:{
                id:index+1,
            },
           
           type:school.tipoesc
       }

       if(!totalByStudents[`${school.faixa}`]){
           totalByStudents[`${school.faixa}`]=school.count
       }else{
           totalByStudents[`${school.faixa}`]+=school.count
       }
   })
   console.log('schoolTypes')
   console.log(schoolTypes)
 
schools.forEach((school)=> {
   if(!schoolTypes[`${school.tipoesc}`]["totalBytype"]){
       schoolTypes[`${school.tipoesc}`].info["totalBytype"]=0
          }
   
   if(schoolTypes[school.tipoesc]){
       schoolTypes[school.tipoesc].info[`${school.faixa}`]=school.count
       schoolTypes[`${school.tipoesc}`].info["totalBytype"]+=school.count
    }
  })

  console.log('schoolTypes')
   console.log(schoolTypes)
   console.log(totalByStudents)

//    const t = Object.keys(schoolTypes)

//    const newTypes = t.map((item)=>{
//        return(
//            {
              
//            }
//        )
//    })

 const aux = Object.keys(schoolTypes)

 const filteredData = aux.map((item)=>{
    return schoolTypes[item]
 })
 console.log('filtered')
 console.log(filteredData)

  return [filteredData,totalByStudents]

}