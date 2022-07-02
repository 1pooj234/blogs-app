import "./Comment.css";
const Comment = (props) => {
  return (
    <div className="single__comment">
      <div className="user__wrapper">{props.user}</div>

      <p className="comment">{props.comment}</p>
    </div>
  );
};
export default Comment;
