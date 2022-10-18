import * as types from "./types";

export default function DashboardReducer(state, action) {
  switch (action.type) {
    case types.IN_VIEW_MODE:
      return {
        ...state,
        isInViewMode: !state.isInViewMode,
      };
    default:
      return state;
  }
}
