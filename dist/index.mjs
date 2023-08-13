const r = ({ type: t = "primary" }) => /* @__PURE__ */ React.createElement("button", { className: t === "primary" ? "primary-button" : t === "secondary" ? "secondary-button" : "" }, "Save");
export {
  r as Button
};
