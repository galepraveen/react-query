import {
  QueryClient, QueryClientProvider
} from "@tanstack/react-query";
import {
  GrandParent
} from "./gpar"

const App = ()=>{
  
  const client = new QueryClient();
  
  return(
  <QueryClientProvider client={client}>
    <GrandParent />
  </QueryClientProvider>
  )
}

export default App;