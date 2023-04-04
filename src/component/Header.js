import React from "react";
import Nuv from "./Nuv";
import Button from "./Button";
import ButtonSecond from "./Button2";

const Header = () => {
    return(
        <div className={'header'}>
            <Nuv/>
            <div className="wrap-btn">
                <Button/>
                <ButtonSecond/>
            </div>
        </div>
    )
}

export default Header