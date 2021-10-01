import { useState } from "react";
import genClassName from "../../util/genClassName";

export default function MyModal(props) {
    const { children } = props;

    const [ toggle, setToggle ] = useState(false);

  const content = children ? children : <div>Hi</div>;

  const toggleHandler = () => {
      setToggle(true);
  }

  const buttons = (
    <div>
      <button onClick={toggleHandler}>Confirm</button>
    </div>
  );

  const output = (
    <div className="mymodal-backdrop">
      <div className="mymodal-container">
        {content}
        {buttons}
      </div>
    </div>
  );

  return (
      <>
    {toggle&&output}
    </>
  );
}
