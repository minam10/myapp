// import React from "react";

// import App from './App';
// import { createRoot} from "react-dom/client";
// import GlobalData from "./ContextAPI/Global";
// import Consume from "./ContextAPI/Consume";

// // createRoot(document.getElementById("root")).render(<App/>);

// //02-09-2023 Context API

// createRoot(document.getElementById("root")).render(<GlobalData.Provider value="minam" sub="reactjs">
//     <Consume/>
//     </GlobalData.Provider>);

import React from "react";
import { createRoot } from "react-dom/client";
// import App from "./App";
// import SecondForm from "./Forms/SecondForm";
import App1 from "./App1";
// import UsingRef from "./refs/UsingRef";
// import FirstForm from "./Forms/FirstForm";
import './global.css'
import Class from "./Class";
import LifeinFun from "./LifeinFun";
import Axios from "./Axios";
// import ToDo from "./ToDoTask/ToDo";
import Parent2 from "./AdvanceHooks/Parent2";
// import SecondForm from "./Forms/SecondForm";
createRoot(document.getElementById("root")).render(<Axios/>);