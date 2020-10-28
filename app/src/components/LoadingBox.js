import React from "react";
import { css } from "@emotion/core";
import SyncLoader from "react-spinners/SyncLoader";

export default function LoadingBox() {
  const override = css`
    width: 90vw;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    border-color: red;
  `;

  return (
    <div className="sweet-loading">
      <SyncLoader css={override} size={25} color={"#123abc"} loading={true} />
    </div>
  );
}
