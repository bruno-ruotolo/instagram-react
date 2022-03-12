export default function Navbar() {
  return (
    <div class="navbar">
      <div class="container">
        <Logo />
        <LogoMobile />
        <InstagramMobile />
        <BarraPesquisa />
        <Icones />
        <IconesMobile />
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div class="logo">
      <ion-icon name="logo-instagram"></ion-icon>
      <div class="separador"></div>
      <img src="assets/img/logo.png" alt="logo" />
    </div>
  );
};

function LogoMobile() {
  return (
    <div class="logo-mobile">
      <ion-icon name="logo-instagram"></ion-icon>
    </div>
  );
};

function InstagramMobile() {
  return (
    <div class="instagram-mobile">
      <img src="assets/img/logo.png" alt="logo" />
    </div>
  )
}

function BarraPesquisa() {
  return (
    <div class="pesquisa">
      <input type="text" placeholder="Pesquisar" />
    </div>

  );
};

function Icones() {
  const ionIconsInformations = ["paper-plane-outline", "compass-outline", "heart-outline", "person-outline"];

  return (
    <div class="icones">
      {ionIconsInformations.map(ionIconsInformation => <ion-icon name={ionIconsInformation}></ion-icon>)}
    </div>
  );
};

function IconesMobile() {
  return (
    < div class="icones-mobile" >
      <ion-icon name="paper-plane-outline"></ion-icon>
    </div >
  );
};