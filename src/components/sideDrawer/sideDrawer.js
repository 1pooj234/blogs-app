import "./SideDrawer.css";
const SideDrawer = (props) => {
  let newClass = "side_drawer";
  if (props.show) {
    newClass = "side_drawer slide";
  }
  return (
    <>
      <div className={newClass}>{props.children}</div>
    </>
  );
};

export default SideDrawer;
