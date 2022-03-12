export default function Story(props) {
  const { userName, userImage } = props;

  return (
    <div class="story">
      <div class="imagem">
        <img src={userImage} alt={userName} />
      </div>
      <div class="usuario">
        {userName}
      </div>
    </div>
  )
};