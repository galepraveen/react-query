import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const GrandParent = ()=>{
  const {data, isLoading, isError} = useQuery(["cat"], ()=>{
    const result = Axios.get(`https://catfact.ninja/fact`)
    .then(resp=>{
      return resp.data
    })
    return result
  })
  //console.log(useQuery)
  
  if(isLoading){
    return <p> loading... </p>
  }
  
  if(isError){
    return <p> error.. </p>
  }
  
  return(
  <>
    <p> {data?.fact} </p>
  </>
  )
}
