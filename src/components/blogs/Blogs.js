import { useEffect, useRef, useState } from "react";
import Blog from "./Blog";
import "./Blogs.css";
const Blogs = (props) => {
  const queryRef = useRef();
  const [query, setQuery] = useState("");

  const blogs = props.blogs.filter((blog) =>
    blog.title.toLowerCase().includes(query.toLowerCase())
  );

  const content = blogs.map((blog) => (
    <Blog key={blog.id} id={blog.id} user={blog.user} title={blog.title} />
  ));
  return (
    <>
      <div className="search__bar">
        <div className="search__bar__holder">
          <input
            placeholder="search for blog"
            type="search"
            ref={queryRef}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="line"></div>
        </div>
      </div>
      <div className="blogs__page">
        {blogs.length === 0 && <p>no blogs found</p>}
        {content}
      </div>
    </>
  );
};
export default Blogs;
