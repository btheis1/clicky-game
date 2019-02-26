import React, { Component } from "react";
import cats from "../cats.json";

class ImageDisplay extends Component {
    state = {
        cats,
        clicked: false
    }

    render() {
        return (
            <div className="container-fluid">    
                {
                    this.state.cats.map(cat=> (
                        <img src = {cat.picture}></img>
                    ))
                }
            </div>
        )
    }
}

export default ImageDisplay;