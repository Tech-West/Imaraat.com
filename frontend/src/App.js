import {Provider} from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="text-center">
        Imaraat.com
      </div>
    </Provider>
  );
}

export default App;
