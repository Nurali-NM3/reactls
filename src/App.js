import React from "react";
import Header from "./component/Header";
import Hero from "./component/Hero";

const App = () => {
    return (
        <div className={'container'}>
            <Header/>
            <div className="main">
                <Hero/>
            </div>
        </div>
    )
}
export default App