import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import ButtonIcon from 'components/ButtonIcon';
import { Link } from 'react-router-dom';
import { getTokenData, isAutenthicated } from 'util/requests';

import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <h4>Usuario: {getTokenData()?.user_name}</h4>
      <h4>Permissão: {getTokenData()?.authorities}</h4>
      <h4>{isAutenthicated()? 'autenticado' : 'Não autenticado'} </h4>
      <div className="base-card home-card">
        <div className="home-content-container">
          <div>
            <h1>Conheça o melhor catálogo de produtos</h1>
            <p>
              Ajudaremos você a encontrar os melhores produtos disponíveis no
              mercado.
            </p>
          </div>
          <div>
            <Link to="/products">
              <ButtonIcon text ="Inicie agora sua busca"/>
            </Link>
          </div>
        </div>
        <div className="home-image-container">
          <MainImage />
        </div>
      </div>
    </div>
  );
};

export default Home;
