import "./App.css";
import Body from "./components/Body";
import Sidebar from "./components/Sidebar";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <div className="header">
          Lorem Ipsum is simply dummy text of the printing
        </div>
        <div className="content">
          <div>
            <Sidebar />
          </div>
          <Body />
        </div>
      </div>
    </Provider>
  );
}

export default App;
