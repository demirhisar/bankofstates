import React from 'react';
import "./Home.css";
import Banner from "./Banner";
import About from "../about/About";

function Home() {
    return (
        <div className="home">
            <Banner/>
            <About/>
        </div>
    );
}

export default Home;