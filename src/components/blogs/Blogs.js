import Blog from "./Blog";
import "./Blogs.css";
const Blogs = (props) => {
  const content = props.blogs.map((blog) => (
    <Blog key={blog.id} id={blog.id} user={blog.user} title={blog.title} />
  ));
  return <div className="blogs__page">{content}</div>;
};
export default Blogs;
