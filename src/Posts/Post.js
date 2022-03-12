import TopoPost from "./TopoPost";
import Conteudo from "./Conteudo";
import FundoPost from "./FundoPost";
import postsInformations from "./PostInformations";

export default function Post() {
  return (
    <div class="posts">
      {
        postsInformations().map(postInformation => {
          const { userName, userImage, conteudoImage, conteudoImageAlt, userCurtidasImage,
            userCurtidasImageAlt, peopleNumber } = postInformation;

          return (
            < div class="post" >
              <TopoPost
                userImage={userImage}
                userName={userName} />

              <Conteudo
                conteudoImage={conteudoImage}
                conteudoImageAlt={conteudoImageAlt} />

              <FundoPost
                userCurtidasImage={userCurtidasImage}
                userCurtidasImageAlt={userCurtidasImageAlt}
                peopleNumber={peopleNumber} />
            </div>
          );
        })
      }
    </div>
  );
};