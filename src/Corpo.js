import AllPosts from "./Posts/AllPosts";
import Stories from "./Stories/Stories";
import Sidebar from "./SideBar/Sidebar";

export default function Corpo() {
  return (
    <div class="corpo">

      <div class="esquerda">
        <Stories />
        <AllPosts />
      </div>

      <Sidebar />
    </div>
  );
};