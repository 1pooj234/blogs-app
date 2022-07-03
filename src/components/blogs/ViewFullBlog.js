import { NavLink } from "react-router-dom";
import Comments from "../comments/Comments";
import "./ViewFullBlog.css";
const ViewFullBlog = (props) => {
  const { title, user, date, body, image } = props.details;

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
          <img className="image" alt={title} src={`${image}`} />
        </div>

        <p className="blog__description">{body}</p>
        <div>
          <NavLink to="/blogs">
            <button className="back_btn">Back</button>
          </NavLink>
        </div>

        <Comments />
      </div>
    </div>
  );
};
export default ViewFullBlog;
