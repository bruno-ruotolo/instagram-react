export default function Post() {
  return (
    <div class="posts">
      <div class="post">
        <TopoPost
          userImage="assets/img/meowed.svg"
          userName="meowed" />

        <Conteudo
          conteudoImage="assets/img/gato-telefone.svg"
          conteudoImageAlt="gato-telefone" />

        <FundoPost
          userCurtidasImage="assets/img/respondeai.svg"
          userCurtidasImageAlt="respondeai"
          peopleNumber="98.540" />
      </div>

      <div class="post">
        <TopoPost
          userImage="assets/img/barked.svg"
          userName="barked" />

        <Conteudo conteudoImage="assets/img/dog.svg"
          conteudoImageAlt="dog" />

        <FundoPost
          userCurtidasImage="assets/img/adorable_animals.svg"
          userCurtidasImageAlt="adorable_animals"
          peopleNumber="99.159" />
      </div>
    </div>
  );
}

function TopoPost(props) {
  return (
    <div class="topo">
      <div class="usuario">
        <img src={props.userImage} alt={props.userName} />
        {props.userName}
      </div>
      <div class="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>
  );
}

function Conteudo(props) {
  return (
    <div class="conteudo">
      <img src={props.conteudoImage} alt={props.conteudoImageAlt} />
    </div>
  );
}

function FundoPostAcoes() {
  return (
    <div class="acoes">
      <div>
        <ion-icon name="heart-outline"></ion-icon>
        <ion-icon name="chatbubble-outline"></ion-icon>
        <ion-icon name="paper-plane-outline"></ion-icon>
      </div>
      <div>
        <ion-icon name="bookmark-outline"></ion-icon>
      </div>
    </div>
  );
}

function FundoPost(props) {
  return (
    <div class="fundo">
      <FundoPostAcoes />
      <div class="curtidas">
        <img src={props.userCurtidasImage} alt={props.userCurtidasImageAlt} />
        <div class="texto">
          Curtido por <strong>{props.userCurtidasImageAlt}</strong> e <strong>outras {props.peopleNumber} pessoas</strong>
        </div>
      </div>
    </div>
  );
}



