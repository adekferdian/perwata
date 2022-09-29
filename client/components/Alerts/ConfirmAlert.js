import React from "react";
import { X } from "react-feather";

const ConfirmAlert = ({ title, description, onClose, onConfirm }) => {
  return (
    <React.Fragment>
      <div
        style={{ top: 100 }}
        className="bg-white position-absolute rounded col-10 col-md-11 p-0 m-0"
      >
        <div
          style={{
            height: 28,
            width: 28,
            top: -14,
            right: -14,
            cursor: "pointer",
          }}
          onClick={onClose}
          className="bg-white rounded d-flex justify-content-center align-items-center position-absolute"
        >
          <X className="text-muted" size={18} />
        </div>
        <div className="w-100 d-flex justify-content-start py-1 px-2 bg-success rounded">
          <span className="text-white">{title}</span>
        </div>
        <div className="d-flex justify-content-start px-2 py-2">
          {description}
        </div>
        <div className="row p-1 d-flex justify-content-end">
          <div
            style={{ height: 32, cursor: "pointer" }}
            onClick={onConfirm}
            className="bg-success px-2 rounded text-white d-flex justify-content-center align-items-center mr-2 c-button"
          >
            OK
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ConfirmAlert;
