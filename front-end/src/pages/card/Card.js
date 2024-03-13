// import { useState } from 'react'
import Logo from "../Logo/Logo";
import "./Card.css";
export default function Card(props) {
  const handleCardClick = () => {
    props.setShowModal(true);
    props.setModalData({
        id:props.id,
        fname: props.fname,
        mname: props.mname,
        lname: props.lname,
        email: props.email,
        PhoneNo1: props.PhoneNo1,
        PhoneNo2: props.PhoneNo2,
        Address: props.Address,
      });
  };
  // const[isHoverd, setIsHovered] = useState(false)
  let first = props.fname.substring(0, 1);
  let last = props.lname.substring(0, 1);
  return (
    <div className="card" onClick={handleCardClick}>
      <Logo first={first} last={last}></Logo>
      <div>
        <span>{props.fname} </span>
        <span>{props.mname} </span>
        <span>{props.lname} </span>
      </div>
      <span>{props.PhoneNo1}</span>
    </div>
  );
}
Card.defaultProps = {
  fname: "",
  mname: "",
  lname: "",
  PhoneNo1: "",
};
