import './styles.css';

const Navbar = () => {
  return (
    <nav>
      <ul className="admin-nav-container">
        <li>
          <a href="link" className="admin-nav-item active">
            <p>Produtos</p>
          </a>
        </li>
        <li>
          <a href="link" className="admin-nav-item">
            <p>Categoria </p>
          </a>
        </li>
        <li>
          <a href="link" className="admin-nav-item">
            {' '}
            <p>Usuário</p>
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
