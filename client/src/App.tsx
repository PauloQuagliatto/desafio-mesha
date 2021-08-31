import { BrowserRouter, Route, Switch } from "react-router-dom"

import { ColaboratorsContextProvider } from './contexts/ColaboratorsContext'

import { RegistrosPage } from "./pages/RegistrosPage"
import { FirstPage } from "./pages/FirstPage"
import { RegisterPage } from "./pages/RegisterPage"
import { ValidatePage } from './pages/ValidatePage'

import { Global } from './styles/Global'

function App() {
  return (
    <BrowserRouter>
      <ColaboratorsContextProvider>
        <Global />
        <Switch>
          <Route path="/" component={FirstPage} exact={true} />
          <Route path="/registros" component={RegistrosPage} />
          <Route path="/:nomedocolaborador/registrar" component={RegisterPage} />
          <Route path="/:nomedocolaborador/validar" component={ValidatePage} />
        </Switch>
      </ColaboratorsContextProvider>
    </BrowserRouter>
  );
}

export { App }
