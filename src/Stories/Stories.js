import StoriesInformations from "./StoriesInformations";
import Story from "./Story";

export default function Stories() {
  return (
    <div class="stories">
      {
        StoriesInformations().map(storie => {
          const { userName, userImage } = storie;

          return <Story userName={userName} userImage={userImage} />
        })
      }

      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div >
  );
};
