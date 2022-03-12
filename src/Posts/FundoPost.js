export default function FundoPost(props) {
  const { userCurtidasImage, userCurtidasImageAlt, peopleNumber } = props;

  return (
    <div class="fundo">
      <FundoPostAcoes />
      <div class="curtidas">
        <img src={userCurtidasImage} alt={userCurtidasImageAlt} />
        <div class="texto">
          Curtido por <strong>{userCurtidasImageAlt}</strong> e <strong>outras {peopleNumber} pessoas</strong>
        </div>
      </div>
    </div>
  );
};

function FundoPostAcoes() {
  const ionIconInformations = ["heart-outline", "chatbubble-outline", "paper-plane-outline"];

  return (
    <div class="acoes">
      <div>
        {
          ionIconInformations.map(ionIconInformation => <ion-icon name={ionIconInformation}></ion-icon>)
        }
      </div>

      <div>
        <ion-icon name="bookmark-outline"></ion-icon>
      </div>
    </div>
  );
};