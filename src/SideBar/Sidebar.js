import User from "./User";
import AllSugestaoUsers from "./AllSugestaoUsers";

export default function Sidebar() {
  const userInformations = {
    userImage: "assets/img/catanacomics.svg",
    userName: "catanacomics",
    userNickName: "Catana"
  };

  const { userName, userImage, userNickName } = userInformations;

  return (
    <div class="sidebar">
      <User userImage={userImage}
        userName={userName}
        userNickName={userNickName} />

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
};



