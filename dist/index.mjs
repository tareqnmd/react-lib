import r from "react";
const n = ({ type: t = "primary" }) => /* @__PURE__ */ r.createElement("button", { className: t === "primary" ? "primary-button" : t === "secondary" ? "secondary-button" : "" }, "Save");
export {
  n as Button
};
