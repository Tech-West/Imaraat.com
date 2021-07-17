import React from "react";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

const Alert = ({ msg, type }) => {
  return (
    <div className="p-2.5 mb-2.5 flex items-center bg-danger-secondary rounded-md border border-danger-primary">
      <ErrorOutlineIcon style={{ color: "#CA0B00" }} />
      <span className="text-danger-primary ml-3">{msg}</span>
    </div>
  );
};

export default Alert;
