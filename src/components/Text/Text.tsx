import React from "react";
import appText from "../../constants/constants";

function Text({ id }: Record<string, string>) {
  return <>{appText[id]}</>;
}

export default Text;
