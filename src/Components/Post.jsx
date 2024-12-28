import "./style/post.css"
export default function Post(props) {
    let a = props.url
  return (
    <div className="post">
        <img src={a} alt="" />
        <div>{props.message}</div>
    </div>
  )
}