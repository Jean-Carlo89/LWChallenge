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













   const schoolTypes = {}
   const totalByStudents = {}
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

     

        // if(schoolTypes[`${school.tipoesc}`]){
        //     newFiltered.push(schoolTypes[`${school.tipoesc}`])
        // }
        
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

 const aux = Object.keys(schoolTypes)

 const filteredData = aux.map((item)=>{
    return schoolTypes[item]
 })
 console.log('schools')
 console.log(schools)
//  console.log('schoolTypes')
//  console.log(schoolTypes)
//  console.log('filtered')
//  console.log(filteredData)
 console.log(' new filtered')
 console.log(newFiltered)

  return [newFiltered,totalByStudents]

}