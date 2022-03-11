export default function Stories() {
  return (
    <div class="stories">
      <Story userImage="assets/img/9gag.svg" userName="9gag" />
      <Story userImage="assets/img/meowed.svg" userName="meowed" />
      <Story userImage="assets/img/barked.svg" userName="barked" />
      <Story userImage="assets/img/nathanwpylestrangeplanet.svg" userName="nathanwpylestrangeplanet" />
      <Story userImage="assets/img/wawawicomics.svg" userName="wawawicomics" />
      <Story userImage="assets/img/respondeai.svg" userName="respondeai" />
      <Story userImage="assets/img/filomoderna.svg" userName="filomoderna" />
      <Story userImage="assets/img/memeriagourmet.svg" userName="memeriagourmet" />

      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}

function Story(props) {
  return (
    <div class="story">
      <div class="imagem">
        <img src={props.userImage} alt={props.userName} />
      </div>
      <div class="usuario">
        {props.userName}
      </div>
    </div>
  );
}