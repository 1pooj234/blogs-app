import { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./AddNewBlog.css";
import Button from "../ui/Button";
import Loading from "../ui/Loading";
import Input from "../ui/Input";
import {
  bodyInputValidity,
  titleInputValidity,
  urlInputValidity,
} from "../../validatorFuncs/validators";
const AddNewblog = (props) => {
  const [loading, setLoading] = useState(null);
  const [formIsValid, setFormIsValid] = useState({
    title: true,
    body: true,
    imageUrl: true,
  });
  const bodyRef = useRef();
  const titleRef = useRef();
  const imageRef = useRef();
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    const body = bodyRef.current.value;
    const title = titleRef.current.value;
    const image = imageRef.current.value;
    const dateObj = new Date();
    const day = dateObj.getDay();
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();
    const date = `${day}-${month}-${year}`;
    const titleIsValid = titleInputValidity(title);
    const bodyIsValid = bodyInputValidity(body);
    const imageIsValid = urlInputValidity(image);
    setFormIsValid({
      title: titleIsValid,
      body: bodyIsValid,
      imageUrl: imageIsValid,
    });
    const isValid = titleIsValid && imageIsValid && bodyIsValid;
    const userName = localStorage.getItem("user");
    if (isValid) {
      props.onAddBlog({
        body,
        title,
        image,
        date,
        user: userName,
      });
    }
  };
  if (loading) {
    return (
      <div className="centered">
        <Loading />
      </div>
    );
  }
  return (
    <form onSubmit={submitHandler}>
      <h1 className="form__heading">Add New Blog</h1>
      <Input
        ref={titleRef}
        input={{
          id: "name",
          type: "text",
          placeholder: "Title",
        }}
        label="Title"
      />
      {!formIsValid.title && (
        <p className="error__text">enter a title of length 10</p>
      )}
      <div className="body__box">
        <textarea placeholder="Enter" className="text__area" ref={bodyRef} />
        <label className="text__area__label">Description</label>
        {!formIsValid.body && (
          <p className="error__text">enter a body of length 500</p>
        )}
      </div>
      <Input
        ref={imageRef}
        input={{
          id: "image",
          type: "text",
          placeholder: "Image Url",
        }}
        label="Image Url"
      />
      {!formIsValid.imageUrl && (
        <p className="error__text">enter valid image url</p>
      )}
      <Button label="Add blog" className="btn1" />
      <div>
        <NavLink to="/blogs">
          <button className="back_btn">Back</button>
        </NavLink>
      </div>
    </form>
  );
};

export default AddNewblog;
