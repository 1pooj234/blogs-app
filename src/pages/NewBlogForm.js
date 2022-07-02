import { useNavigate } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { postBlogData } from "../api";
import AddNewblog from "../components/blogs/AddNewBlog";
import HttpHook from "../hooks/httpHook";
import "./NewBlogForm.css";
const NewBlogForm = () => {
  const navigate = useNavigate();

  const { sendRequest, status, error } = HttpHook(postBlogData);

  useEffect(() => {
    if (status === "completed" && !error) {
      navigate("/blogs");
    }
  }, [status, error, navigate]);

  const postNewBlog = useCallback(
    (data) => {
      sendRequest(data);
    },
    [sendRequest]
  );

  return (
    <div className="new-blog-page">
      <AddNewblog status={status} error={error} onAddBlog={postNewBlog} />
    </div>
  );
};
export default NewBlogForm;
