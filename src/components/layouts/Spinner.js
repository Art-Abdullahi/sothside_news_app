import React from "react";
import { Spinner } from "reactstrap";

const Example = (props) => {
  return (
    <div className="container text-center">
      <Spinner className="text-center" type="grow" color="primary" />
    </div>
  );
};

export default Example;
