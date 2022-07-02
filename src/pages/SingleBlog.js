import { useParams } from "react-router-dom";
import { getSingleBlogData } from "../api";
import HttpHook from "../hooks/httpHook";
import { useEffect } from "react";
import ViewFullBlog from "../components/blogs/ViewFullBlog";
import Loading from "../components/ui/Loading";
const SingleBlog = () => {
  const { id } = useParams();
  const {
    sendRequest,
    data: singleBlog,
    error,
    status,
  } = HttpHook(getSingleBlogData);

  useEffect(() => {
    sendRequest(id);
  }, [id, sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <Loading />
      </div>
    );
  }
  if (error || singleBlog === null) {
    return <p>{error}</p>;
  }
  return (
    <div>
      <ViewFullBlog key={id} details={{ ...singleBlog }} />
    </div>
  );
};
export default SingleBlog;
