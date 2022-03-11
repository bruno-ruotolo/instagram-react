export default function AllSugestaoUsers() {
  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      <SugestaoUsers
        userImage="assets/img/bad.vibes.memes.svg"
        userName="bad.vibes.memes" />

      <SugestaoUsers
        userImage="assets/img/chibirdart.svg"
        userName="chibirdart" />

      <SugestaoUsers
        userImage="assets/img/razoesparaacreditar.svg"
        userName="razoesparaacreditar" />

      <SugestaoUsers
        userImage="assets/img/adorable_animals.svg"
        userName="adorable_animals" />

      <SugestaoUsers
        userImage="assets/img/smallcutecats.svg"
        userName="smallcutecats" />
    </div>
  );
}

function SugestaoUsers(props) {
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={props.userImage} alt={props.userName} />
        <div class="texto">
          <div class="nome">{props.userName}</div>
          <div class="razao">Segue você</div>
        </div>
      </div>
      <div class="seguir">Seguir</div>
    </div>

  );
}