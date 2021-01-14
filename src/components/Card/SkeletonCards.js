import React, { useContext } from "react";
import Skeleton from "@yisheng90/react-loading";
import { ThemeContext } from "../../context/ThemeProvider";

const SkeletonCards = () => {
  const { theme } = useContext(ThemeContext);
  const skeletonColor = theme === "dark" ? "hsl(209, 23%, 22%)" : "#ffffff";

  return (
    <>
      {[...new Array(9)].map((_, index) => (
        <div className={`card-loader ${theme}`} key={index}>
          <Skeleton color={skeletonColor} height="149px" />
          <Skeleton color={skeletonColor} height="60px" />
          <Skeleton color={skeletonColor} height="70px" />
        </div>
      ))}
    </>
  );
};

export default SkeletonCards;
