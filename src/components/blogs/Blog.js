import { NavLink } from "react-router-dom";
import "./Blog.css";
const Blog = (props) => {
  return (
    <div className="blog__item">
      <h1 className="blog__title">{props.title.slice(0, 25)}</h1>
      <div className="top">
        <span className="user__holder">
          <b>{props.user}</b>
        </span>
        <NavLink className="view__link" to={`/blogs/${props.id}`}>
          View Full Blog
        </NavLink>
      </div>
    </div>
  );
};
export default Blog;
