import logo from '../assets/img/logo_musico.png';

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo" className="logo" />
      <h1>GESTÃO DE MÚSICOS FREELANCER</h1>
    </header>
  );
}

export default Header;
