import React from "react";
import { GlobalContext } from "@hooks/GlobalContext";
import {LoginRegister} from "@structure/LoginRegister"
function AppHeader() {
    const {
        themeApp,
        isLogged
  } = React.useContext(GlobalContext);
    return (
        <>
            <header id="site-header" className={`w-full h-16 fixed top-0 bg-minimalist_elegance-primary`}>
                <div className={`site-header--inner-frame inner-frame flex flex-row`}>
                    {!isLogged && (<><LoginRegister/></>)}
                    
                    <div>logo</div>
                    <div>contact</div>
                </div>
            </header>
        </>
    );
}

export { AppHeader };