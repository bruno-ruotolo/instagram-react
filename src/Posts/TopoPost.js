export default function TopoPost(props) {
  const { userImage, userName } = props;

  return (
    <div class="topo">

      <div class="usuario">
        <img src={userImage} alt={userName} />
        {userName}
      </div>

      <div class="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>

    </div>
  );
};
