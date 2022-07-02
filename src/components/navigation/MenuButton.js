import "./MenuButton.css";
const MenuButton = (props) => {
  return (
    <div onClick={props.click} className="menu__btn">
      <div className="s1"></div>
      <div className="s2"></div>
    </div>
  );
};

export default MenuButton;
