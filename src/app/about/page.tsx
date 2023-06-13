"use client"
import { useEffect } from "react"

type Props = {}

const About = (props: Props) => {
  return (
    useEffect(()=>{
      console.log("Heloo")
    },[])
  )
}

export default About

///////////////////

// import { useEffect, useState } from "react"

// const About = () => {
//   const [sales, setSales] =useState()
//   const[isLoading, setIsLoading] =useState(false)
//   useEffect(()=>{
//     setIsLoading(true)
//   fetch('https://todo-list-96653-default-rtdb.firebaseio.com/sales.json')
//   .then((response)=>response.json())
//   .then(data =>{
//     const transformed=[]
//     for(const key in data){
//       transformed.push({
//         id: key,
//         usernames: data[key].usernames,
//         volume: data[key].volume
//       })
//     }
//     setSales(transformed);
//     setIsLoading(false);
//   })
//   },[])
//   console.log(sales);
//   if(isLoading){
//   return <p>Loading...</p>
//   }
//   if(!sales){
//     return<p>No data yet</p>
//   }
//   return(
//     <ul>
//     {sales.map((sale)=>(
//       <li key={sale.id}>
//       {sale.username} - ${sale.volume}
//       </li>
//     ))}
//    </ul>
//   )
  
//   }
//   export default About
