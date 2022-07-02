import "./BackDrop.css";
const BackDrop = (props) => {
  return (
    <section onClick={props.onClose} className={`back_drop`}>
      {props.children}
    </section>
  );
};

export default BackDrop;
