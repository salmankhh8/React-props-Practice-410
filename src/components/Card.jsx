import React from "react";
function Card(Prop) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{Prop.name}</h2>
        <img className="circle-img" src={Prop.img} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p className="info">{Prop.tel}</p>
        <p className="info">{Prop.email}</p>
      </div>
    </div>
  );
}
export default Card;
