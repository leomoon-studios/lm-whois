import React, {useState, useEffect} from 'react';
import flatstore from 'flatstore';
import Loader from 'react-loader-spinner'




const Results = ({loading, results}) => {
    const [status, setStatus] = useState(false); 
    const [showWhoisInfobox, setShowWhoisInfobox] = useState(false); 
    const [domainName, setDomainName] = useState(''); 

    useEffect(() => {
        if(results && results.status){
            setStatus(results.status);
            setDomainName(results.domain)
        }
    }, [results]);

    const showWhois = () => {
        setShowWhoisInfobox(!showWhoisInfobox);
    }

    const getDate = (mydate) => {
        var lmdate = new Date(mydate);
        return lmdate.getFullYear()+'-'+(lmdate.getMonth()+1)+'-'+lmdate.getDate();
    }

    if(loading){
        return <Loader
                    type="MutatingDots"
                    color="#009900"
                    height={100}
                    width={100}
                />
    }else{
        return (
            <div>
                {status && status === 'available' && 
                    <div>
                        <div className="available">{domainName} is available</div><br />
                        <h4><a href="https://leomoon.com" alt="you should change it!">Register it now</a></h4>
                    </div>
                }
                {status && status === 'registered' &&
                    <div>
                        <div>
                            <h4 className="not-available">Sorry! {domainName} is registered</h4><br />
                            <button className="btn-whois" onClick={showWhois}>Show whois data</button>
                        </div>
                        <div className="data">
                            {showWhoisInfobox &&
                            <div className="whois-data">
                                <span className="whois-header">Basic Info</span>
                                <span>Created on: {getDate(results.created_on)}</span>
                                <span>Updated on: {getDate(results.updated_on)}</span>
                                <span>Expires on: {getDate(results.expires_on)}</span>
                                <span>Registrar:  {results.registrar.name}</span>
                                {results.registrant_contacts.length > 0 &&
                                    <>
                                    <span className="whois-header">Registrant Contacts</span>
                                    <span>Name: {results.registrant_contacts[0].name}</span>
                                    <span>Address: {results.registrant_contacts[0].address}</span>
                                    <span>City: {results.registrant_contacts[0].city}</span>
                                    <span>State: {results.registrant_contacts[0].state}</span>
                                    <span>Country: {results.registrant_contacts[0].country}</span>
                                    <span>Phone: {results.registrant_contacts[0].phone}</span>
                                    <span>Fax: {results.registrant_contacts[0].fax}</span>
                                    <span>Email: {results.registrant_contacts[0].email}</span>
                                    </>
                                }
                                <span className="whois-header">Name Servers</span>
                                {results.nameservers.map((item, index)=>{
                                    return <span key={index}>{item.name}</span>
                                })}
                            </div>
                            }
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default flatstore.connect(['loading', 'results'])(Results);