import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import ContactoPage from './pages/ContactoPage';
import EmpresaPage from './pages/EmpresaPage';
import HomePage from './pages/HomePage';
import NovedadesPage from './pages/NovedadesPage';
import ProductosPage from './pages/ProductosPage';
import ServiciosPage from './pages/ServiciosPage';


function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/empresa" exact component={EmpresaPage} />
        <Route path="/servicios" exact component={ServiciosPage} />
        <Route path="/productos" exact component={ProductosPage} />
        <Route path="/novedades" exact component={NovedadesPage} />
        <Route path="/contacto" exact component={ContactoPage} />
      </Switch>
      <Footer />
    </Router>

  );
}

export default App;
