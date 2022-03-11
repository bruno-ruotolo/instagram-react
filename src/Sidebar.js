import AllSugestaoUsers from "./AllSugestaoUsers";

export default function Sidebar() {
  return (
    <div class="sidebar">
      <User userImage="assets/img/catanacomics.svg"
        userName="catanacomics"
        userNickName="Catana" />

      <AllSugestaoUsers />

      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
        Hashtags • Idioma
      </div>

      <div class="copyright">
        © 2021 INSTAGRAM DO FACEBOOK
      </div>
    </div>
  );
}

function User(props) {
  return (
    <div class="usuario">
      <img src={props.userImage} alt={props.userName} />
      <div class="texto">
        <strong>{props.userName}</strong>
        {props.userNickName}
      </div>
    </div>
  );
}

