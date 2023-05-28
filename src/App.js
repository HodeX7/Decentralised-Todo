import "./App.css";
import Body from "./components/Body";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div className="app">
      <div className="header">
        Lorem Ipsum is simply dummy text of the printing
      </div>
      <div className="content">
        <Sidebar />
        <Body />
      </div>
    </div>
  );
}

export default App;
