export default function User(props) {
  const { userImage, userName, userNickName } = props;

  return (
    <div class="usuario">
      <img src={userImage} alt={userName} />

      <div class="texto">
        <strong>{userName}</strong>
        {userNickName}
      </div>
    </div>
  );
};