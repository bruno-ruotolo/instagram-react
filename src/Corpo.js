import AllPosts from "./AllPosts";
import Stories from "./Stories";
import Sidebar from "./Sidebar";

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
}
