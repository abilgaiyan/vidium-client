import React from 'react';
import logo from "../images/logo.png";

const Welcome = () => {
    return (
        <div className="wellcom_screen ">
        <div className="container">
                        <div className="row">
                            <div className="offset-lg-2 col-lg-8 text-center">
                                <h3 className="logo_text">Vidium</h3>
                                <img src={logo} className="mx-auto d-block"></img>
                            </div>
                        </div>
                    </div>

                    </div>
       
    )
}

export default Welcome
