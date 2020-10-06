import React from 'react'

const Contacts = ({ contacts }) => {

    const renderAPODContent = () => {
        if(contacts.media_type == 'image') {
            return <img width="450" className="img-responsive" src = {contacts.hdurl}></img>;
        }
        if (contacts.media_type == 'video') {
            return <iframe className="embed-responsive-item" width="640" height="360" src={contacts.url}></iframe>
        }
    }

    return (
      <div>
        <center>
            <h1>Astronomy Picture of the Day</h1>
            <h2>{new Date().toLocaleTimeString()}</h2>
            <p><b>{contacts.date}</b></p>
            </center>
            <div className="container">
                <div className="row">               
                    <div className="col">
                        <p>{contacts.explanation}</p>
                    </div>
                    <div className="col">
                        {renderAPODContent()}
                    </div>
                </div>
            </div>
      </div>
    )
  };

  export default Contacts