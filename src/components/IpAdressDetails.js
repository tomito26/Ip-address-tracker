const IpAddressDetails = ({ ipDetails }) => {

    console.log(ipDetails)
  
    return(
        <div className="container">
            <div className="wrapper">
                <div className="ip">
                    <h2 className="details-header">ip address</h2>
                    <p>{ipDetails.ip}</p>
                </div>
                <div className="location">
                    <h2 className="details-header">Location</h2>
                    <p>{ipDetails.location === undefined ? "" : ipDetails.location.city},{ipDetails.location === undefined ? "" : ipDetails.location.region}{ipDetails.location === undefined ? "" : ipDetails.location.postCode}</p>
                    
                </div>
                <div className="timeZone">
                    <h2 className="details-header">Timezone</h2>
                    {<p>{ipDetails.location === undefined ? "" : ipDetails.location.timezone}</p> }
                </div>
                <div className="isp">
                    <h2 className="details-header">Isp</h2>
                    <p>{ipDetails.isp}</p>
                </div>
            </div>
        </div>
    );
};

export default IpAddressDetails