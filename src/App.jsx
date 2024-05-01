import { useEffect } from "react";
import getResult from "./api/getResult";

const App = () => {
  useEffect(() => {
    const result = getResult();
    console.log("result", result);
    console.log("result");
  });
  return <div>App</div>;
};

export default App;
