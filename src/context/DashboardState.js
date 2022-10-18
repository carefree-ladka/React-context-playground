import { useReducer } from "react";
import dummyState from "../utils/dummyState";
import DashboardContext from "./context";
import DashboardReducer from "./DashboardReducer";
import * as types from "./types";

export default function DashboardState(props) {
  const initialState = dummyState;
  const [state, dispatch] = useReducer(DashboardReducer, initialState);

  const setActiveLink = (link) => {
    dispatch({ type: types.ACTIVE_LINK, payload: link });
  };

  const setInViewMode = () => {
    dispatch({ type: types.IN_VIEW_MODE });
  };

  return (
    <DashboardContext.Provider
      value={{
        data: state.dashboardState,
        activeLink: state.activeLink,
        isInViewMode: state.isInViewMode,
        setActiveLink,
        setInViewMode,
      }}
    >
      {props.children}
    </DashboardContext.Provider>
  );
}
