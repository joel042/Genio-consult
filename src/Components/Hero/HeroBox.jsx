import React from "react";
import HeroCard from "./HeroCard";
import Shop from "../Hero/shop.png";
import Note from "../Hero/notebook.png";
import Tool from "../Hero/tool-box.png";

const HeroBox = () => {
  return (
    <div className="heroBox">
      <HeroCard
        headColor={"#252B42"}
        bgColor={"#FFFFFF"}
        textColor={"#737373"}
        CardImg={Note}
        CardHeading={"Strategy"}
        CardText={
          "Helping organizations define their strategic direction, set goals, and develop actionable plans"
        }
      />

      <HeroCard
        bgColor={"#2094B5"}
        textColor={"#FEFEFE"}
        CardImg={Tool}
        CardHeading={"Technology"}
        CardText={
          "Implementing innovative technology solutions to support business objectives and digital transformation"
        }
      />

      <HeroCard
        headColor={"#252B42"}
        bgColor={"#FFFFFF"}
        textColor={"#737373"}
        CardImg={Shop}
        CardHeading={"Risk Management"}
        CardText={
          "Identifying, assessing, and mitigating risks to protect assets and ensure business continuity."
        }
      />
    </div>
  );
};

export default HeroBox;
