import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import App from './App';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // Provider rend le store disponible à tous les composants de l'application
  <Provider store={store}>
    <App />
  </Provider>
);
