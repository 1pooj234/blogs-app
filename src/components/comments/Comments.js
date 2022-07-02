import { useParams } from "react-router-dom";
import { useCallback, useEffect } from "react";
import Comment from "./Comment";
import HttpHook from "../../hooks/httpHook";
import { getAllComments } from "../../api";
import CommentInput from "./CommentInput";
import NotFoundPage from "../ui/NotFoundPage";
import Loading from "../ui/Loading";
import "./Comments.css";
const Comments = (props) => {
  const { id } = useParams();
  const {
    sendRequest,
    data: comments,
    status,
    error,
  } = HttpHook(getAllComments);
  useEffect(() => {
    sendRequest(id);
  }, [id, sendRequest]);

  const updatedCommentsHandler = useCallback(() => {
    sendRequest(id);
  }, [sendRequest, id]);
  let content;
  if (status === "pending") {
    content = (
      <div className="centered">
        <Loading />
      </div>
    );
  }
  if (error && comments === null) {
    content = <p>error</p>;
  }
  if (comments?.length === 0 && status === "completed") {
    content = <NotFoundPage>No comments yet</NotFoundPage>;
  }
  if (comments?.length > 0 && status === "completed") {
    content = comments.map((comment) => (
      <Comment key={comment.id} user={comment.user} comment={comment.comment} />
    ));
  }
  return (
    <div>
      <CommentInput blogId={id} onUpdateComments={updatedCommentsHandler} />
      <div className="comment__section">{content}</div>
    </div>
  );
};
export default Comments;
