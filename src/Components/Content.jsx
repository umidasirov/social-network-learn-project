import "../Components/style/Content.css"
import MyPost from "./MyPost"
export default function Content() {
  return (
    <div className="content">
    <div className="image">
      <img src="https://avatars.mds.yandex.net/i?id=58d014271b1e99f9444554a8931bfaa1_l-6917174-images-thumbs&n=13" alt="" />
    </div>
    <div className="avatar">
      ava + desc
    </div>
    <MyPost/>
  </div>
  )
}
