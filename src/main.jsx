import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyled } from './GlobalStyled.jsx'
import { GlobalState } from './context/GlobalContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GlobalState>
    <GlobalStyled/>
    <App />
  </GlobalState>,
)
