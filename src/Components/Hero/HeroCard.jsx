import React from "react";

const HeroCard = (props) => {
  const { CardImg, CardHeading, CardText, bgColor, textColor, headColor } =
    props;
  return (
    <div
      className="heroCard"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <img src={CardImg} alt="" />
      <h2 style={{ color: headColor }}>{CardHeading}</h2>
      <p>{CardText}</p>
    </div>
  );
};

export default HeroCard;
