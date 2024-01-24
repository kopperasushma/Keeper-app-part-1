import React from "react";
const date = new Date();

function Copyright() {
  return <p className="footer"> copyright © {date.getFullYear()}</p>;
}
export default Copyright;
