import "./App.css";

import CakeContainer from "./Components/CakeContainer";
import IceCreamContainer from "./Components/IceCreamContainer";

import store from "./Components/Redux/Store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        Confectionary
        <CakeContainer />{" "}
        {/*using connect, mapStateToProp and mapDispatchToProp */}
        <IceCreamContainer /> {/*using redux hooks */}
      </div>
    </Provider>
  );
}

export default App;
