import { combineReducers } from "redux";
import CustomizerReducer from "./customizer/Reducer";
import chatReducer from "./chats/Reducer";
import notesReducer from "./notes/Reducer";
import emailReducer from "./email/";

const RootReducers = combineReducers({
  CustomizerReducer,
  chatReducer,
  notesReducer,
  emailReducer,
});

export default RootReducers;
