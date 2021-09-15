import React from 'react';

const Header = (props) =>{
    return (
        <header>
        <div className="holder">
            <div className="logo">
                <img src="images/logo.png" width="100"
                    alt="Autopartes Rosario" />
                    <h1>Autopartes Rosario</h1>
            </div>
        </div>
        </header>
    );
}

export default Header;