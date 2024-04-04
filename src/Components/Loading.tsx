import { CSSProperties } from "react";

const style: CSSProperties = {
  border: "var(--gap-s) solid var(--color-2)",
  borderRightColor: "transparent",
  width: "var(--gap)",
  height: "var(--gap)",
  borderRadius: "50%",
  animation: "spin 1s infinite",
};

const stylesDiv: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "50vh",
}

const Loading = () => {
  return <div style={stylesDiv} >
      <span style={style}></span>
  </div>;
};

export default Loading;
