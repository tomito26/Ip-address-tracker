import {  useState,useEffect } from 'react';
import IpAddressDetails from './components/IpAdressDetails';


function App() {
  const [ipAddress,setIpAddress] = useState('62.8.84.56');
  const [ipDetails,setIpDetails] = useState({})

  useEffect(()=>{
    const fetchIpDetails = async () =>{
      const getIpDetails = await fetchLocation()
      setIpDetails(getIpDetails)
    }
    fetchIpDetails()
   
  },[]);
  

  const fetchLocation = async () =>{
    const res = await fetch(`https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_MY_API_KEY}=${ipAddress}`);
    const data = await res.json();
   
    return data
  }

  return (
    <div className="App">
      <IpAddressDetails ipDetails={ipDetails} />
    </div>
  );
}

export default App;
