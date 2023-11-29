// import { Test } from "./Test";
// import Garage from "./ParentChild";
// import {Timer} from "./Timer";
// import {Ball} from "./ConditionalRendering";
// import { ReactList } from "./ReactList";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";
// import ThemedComponent from "./context/ThemeComponent";
// import { ParentComponent } from "./prop-drilling/ParentComponenent";
// import {Car} from "./State";
// import { TimerWithEvents } from "./TimerWithEvents";

function App() {
  return (
    <BrowserRouter>
    <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
