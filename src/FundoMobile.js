export default function FundoMobile() {
  const ionIconInfomations = ["home", "search-outline", "add-circle-outline", "heart-outline", "person-outline"];

  return (
    <div class="fundo-mobile">
      {ionIconInfomations.map(ionIconInfomation => <ion-icon name={ionIconInfomation}></ion-icon>)}
    </div>
  );
};