import React from "react";

const NavBar = () => {
    return(
        <nav className="navbar navbar-dark bg-primary">
        
            <div className="brand">
                <a href="/"><h2>Cat Clicky Game</h2></a>
            </div>
            <div className="results">
                You guessed correctly!
            </div>
            <div className="score">
                Score: <span id="score"></span> | Top Score: <span id="topScore"></span>
            </div>
       
   </nav>
    )
}

export default NavBar;