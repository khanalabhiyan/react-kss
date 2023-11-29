// import { Test } from "./Test";
// import Garage from "./ParentChild";
// import {Timer} from "./Timer";
// import {Ball} from "./ConditionalRendering";
// import { ReactList } from "./ReactList";
import { ParentComponent } from "./prop-drilling/ParentComponenent";
// import {Car} from "./State";
// import { TimerWithEvents } from "./TimerWithEvents";

function App() {
  return (
    <ParentComponent message="Hello World"/>
  );
}

export default App;
