export default function handleData(schools){
   // console.log('entrou aqui')
    console.log(schools)
    const schoolTypes = {}
    schools.forEach(school => {
        schoolTypes[`${school.tipoesc}`] = {
            type:true
            
        }
    })
  //  console.log(schoolTypes)
   // console.log(Object.keys(schoolTypes))

//    schools.forEach((school)=> {
//     if(!schoolTypes[`${school.faixa}`]){
//         schoolTypes[school.tipoesc][`${school.faixa}`]=0
//     }
   
//      if(schoolTypes[school.tipoesc]){
//         schoolTypes[school.tipoesc][`${school.faixa}`]+=school.count
//      }
//    })

schools.forEach((school)=> {
   if(schoolTypes[school.tipoesc]){
        schoolTypes[school.tipoesc][`${school.faixa}`]=school.count
     }
   })

   console.log(schoolTypes)

}