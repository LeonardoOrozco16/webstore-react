// Structure
import { AppLayout } from "@structure/AppLayout";
import { AppHeader } from "@structure/AppLayout/AppHeader";
import { AppBody } from "@structure/AppLayout/AppBody";
import { AppNav } from "@structure/AppLayout/AppNav";
import { AppFooter } from "@structure/AppLayout/AppFooter";
// \Structure

// Providers
import { GlobalProvider } from "@hooks/GlobalContext";
// \ Providers

import './App.css'


function App() {


  return (
    <GlobalProvider>
      <AppLayout>
        <AppHeader />
        <AppBody>
          <h2>probando</h2>
        </AppBody>
        <AppNav />
        <AppFooter/>
      </AppLayout>
    </GlobalProvider>
  )
}

export default App
