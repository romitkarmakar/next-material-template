import { IState } from "./state";
import { createStore } from "redux";

const initialState: IState = {
  clicked: 0,
};

const reducer = (state = initialState, action) => {
  if (action.type == "INCREASED")
    return { ...state, clicked: state.clicked + 1 };
  else if (action.type == "DECREASED")
    return { ...state, clicked: state.clicked - 1 };
  else return state;
};

const store = createStore(reducer);

export default store;
