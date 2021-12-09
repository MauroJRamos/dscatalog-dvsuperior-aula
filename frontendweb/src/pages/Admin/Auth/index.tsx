import { ReactComponent as AuthImage } from 'assets/images/img-login.svg';
import { Route, Switch } from 'react-router-dom';
 
import './styles.css';

const Auth = () => {
  return (
    <div className="auth-container">
      <div className="auth-banner-container">
        <h1>Divulgue seus produtos no dscatalog</h1>
        <p>
          Faça parte do nosso catalogo de divulgação e aumente as suas vendas
        </p>
        <AuthImage />
      </div>
      <div className="auth-form-container">
        <Switch>
          <Route path="/admin/auth/login">
            <h6>Card login</h6>
          </Route>
          <Route path="/admin/auth/singup">
            <h1>CARD SINGUP</h1>
          </Route>
          <Route path="/admin/auth/recover">
            <h1>CARD RECOVER</h1>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Auth;
