import {  useState,useEffect } from 'react';
import IpAddressDetails from './components/IpAdressDetails';


function App() {
  const [ipAddress,setIpAddress] = useState('62.8.84.56');

  useEffect(()=>{
    fetchLocation()

  },[]);

  const fetchLocation = async () =>{
    const res = await fetch(`https://geo.ipify.org/api/v1?apiKey=at_a3vrHihi2K5Zu4JoizStcqrDQFxJJ&ipAddress=${ipAddress}`);
    const data = await res.json();
    console.log(data)
  }

  return (
    <div className="App">
      <IpAddressDetails ipAddress={ipAddress} />
    </div>
  );
}

export default App;
