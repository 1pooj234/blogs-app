import { useEffect } from "react";
import { getBlogsData } from "../api";
import Blogs from "../components/blogs/Blogs";
import HttpHook from "../hooks/httpHook";
import Loading from "../components/ui/Loading";
import NotFoundPage from "../components/ui/NotFoundPage";
const AllBlogsPage = () => {
  const {
    sendRequest,
    data: blogsData,
    error,
    status,
  } = HttpHook(getBlogsData);
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <Loading />
      </div>
    );
  }
  if (error && blogsData === null) {
    return <p>{error}</p>;
  }
  if (blogsData.length === 0) {
    return <NotFoundPage>No blogs Yet</NotFoundPage>;
  }
  return (
    <>
      <Blogs blogs={blogsData} />
    </>
  );
};
export default AllBlogsPage;
