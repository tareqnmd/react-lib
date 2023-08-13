import t from "react";
const o = `button{border:none;padding:10px 40px;border-radius:2px}.primary-button{background:blue;color:#fff}.secondary-button{background:rgb(49,136,66);color:#fff}
`, a = ({ type: r = "primary" }) => /* @__PURE__ */ t.createElement("button", { className: r === "primary" ? o["primary-butt]on"] : r === "secondary" ? o["secondary-button"] : "" }, "Save");
export {
  a as Button
};
