import SugestaoUsers from "./SugestaoUsers";
import SugestaoUsersInformations from "./SugestaoUsersInformations";

export default function AllSugestaoUsers() {
  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {
        SugestaoUsersInformations().map(sugestaoUsersInformation => {
          const { userImage, userName, razao } = sugestaoUsersInformation;

          return (
            <SugestaoUsers
              userImage={userImage}
              userName={userName}
              razao={razao} />
          );
        })
      }
    </div>
  );
};