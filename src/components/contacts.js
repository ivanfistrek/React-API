import React from 'react'

const Contacts = ({ contacts }) => {
    return (
      <div>
        <center>
            <h1>Astronomy Picture of the Day</h1>
            <p><b>{contacts.date}</b></p>
            </center>
            <div className="container">
                <div className="row">               
                    <div className="col">
                        <p>{contacts.explanation}</p>
                    </div>
                    <div className="col">
                        <img width="450" className="img-responsive" src = {contacts.hdurl}></img>
                    </div>
                </div>
            </div>
      </div>
    )
  };

  export default Contacts