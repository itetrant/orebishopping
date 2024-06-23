import React from "react";

const Image = ({ imgSrc, className }) => {
  return <img className={className} src={imgSrc??"./sampleImage.jpg"} alt={imgSrc} />;
};

export default Image;
