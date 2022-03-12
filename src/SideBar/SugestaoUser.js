export default function SugestaoUsers(props) {
  const { userImage, userName, razao } = props;

  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={userImage} alt={userName} />
        <div class="texto">
          <div class="nome">{userName}</div>
          <div class="razao">{razao}</div>
        </div>
      </div>
      <div class="seguir">Seguir</div>
    </div>
  );
}