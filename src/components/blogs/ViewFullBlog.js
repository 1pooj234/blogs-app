import Comments from "../comments/Comments";
import "./ViewFullBlog.css";
const ViewFullBlog = (props) => {
  const { title, user, date, body, image, id } = props.details;

  return (
    <div className="single__blog">
      <div>
        <span className="user__holder">
          <b>{user}</b>
        </span>
        <div className="title__date">
          <h3 className="blog__heading">{title}</h3>
          <b className="date">{date}</b>
        </div>
      </div>
      <div>
        <div className="img__block">
          <img className="image" src={`${image}`} />
        </div>

        <p className="blog__description">{body}</p>

        <Comments />
      </div>
    </div>
  );
};
export default ViewFullBlog;
