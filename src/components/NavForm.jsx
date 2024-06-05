import React from "react";

const NavForm = (props) => {
  console.log(props);
  return (
    <div>
      <li className="nav-form-list">{props.NavList}</li>
    </div>
  );
};

export default NavForm;
