import { ClientContext } from "./contexts/ClientProvider"
import { useEffect } from "react"
import { useClient } from './hooks/useClient';
import '@fortawesome/fontawesome-free/css/all.min.css'; 


function App() {
  const client = useClient(ClientContext)
  useEffect(() => {
    client.invoke('resize', { width: '370px', height: '100px' })
  }, [client])
    
  
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '100%' }}>
      <i className="fas fa-home"></i>
      <i className="fas fa-search"></i>
      <i className="fas fa-user"></i>
      <i className="fas fa-cog"></i>
    </div>
  )
}

export default App
