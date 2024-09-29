import React from "react";

const GlobalContext = React.createContext();

function GlobalProvider(prop) {
    const [themeApp, setThemeApp] = React.useState("minimalist_elegance");
    const [isLogged, setIsLogged] = React.useState(false);

    return (<GlobalContext.Provider value={{
        themeApp,
        setThemeApp,
        isLogged,
        setIsLogged
    }}>{prop.children}</GlobalContext.Provider>);
}
export {GlobalContext,GlobalProvider};