import React from "react";
import "./LoaderDetail.css";
import Loader from "./Loader";
import { RaceBy } from "@uiball/loaders";

function LoaderDetail() {
  return (
    <>
      <h1 className="Loader-title">
        <RaceBy size={500} lineWeight={20} speed={1.4} color="white" />
      </h1>
      <div>
        <Loader/>
      </div>
      <div className="Loader-Box">
        <div className="Loader-text">
          <h3>
            <RaceBy size={300} lineWeight={15} speed={1.4} color="black" />
          </h3>
        </div>
        <div className="Loader-text">
          <h4>
            <RaceBy size={300} lineWeight={10} speed={1.4} color="black" />
          </h4>
        </div>
      </div>
    </>
  );
}

export default LoaderDetail;
