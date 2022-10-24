import ReactDOM from "react-dom";
import "antd/dist/antd.less";
import "./styles/index.less";
import { Provider } from "react-redux";
import App from "./App";
import "./mock";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);
