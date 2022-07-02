import { useContext, useEffect, useRef } from "react";
import { addComments } from "../../api";
import { AuthCtx } from "../../context/AuthContext";
import HttpHook from "../../hooks/httpHook";
import Button from "../ui/Button";
import "./CommentInput.css";
const CommentInput = (props) => {
  const ctx = useContext(AuthCtx);
  const commentRef = useRef();

  const { blogId, onUpdateComments } = props;
  const { sendRequest, status, error } = HttpHook(addComments);

  useEffect(() => {
    if (status === "completed" && !error) {
      onUpdateComments();
    }
  }, [status, error, onUpdateComments]);
  const submitHandler = (e) => {
    e.preventDefault();
    const comment = commentRef.current.value;
    const userName = localStorage.getItem("user");
    sendRequest({ commentData: { comment, user: userName }, blogId });
    commentRef.current.value = "";
  };
  return (
    <form onSubmit={submitHandler}>
      <textarea
        disabled={!ctx.isLoggedIn}
        placeholder="Add comment"
        className="comment__input"
        ref={commentRef}
      />
      <Button
        isdisabled={!ctx.isLoggedIn}
        label="Add comment"
        className="btn2"
      />
    </form>
  );
};

export default CommentInput;
