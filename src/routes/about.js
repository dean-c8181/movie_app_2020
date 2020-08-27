import React from "react";
import "../routes/Home.css";

function About(props) {
    console.log(props);
    return(
        <div>
            <span className="whiteTxt">About this page : I built it because I love movies.</span>
        </div>
    );
}

export default About;