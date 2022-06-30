import React from "react";
import "./loading.scss";
import { BallTriangle } from  'react-loader-spinner'
const Loading = () => {
    return <div className="loader"><BallTriangle
    height="100"
    width="100"
    color='white'
    ariaLabel='loading'
  /></div>;
};

export default Loading;
