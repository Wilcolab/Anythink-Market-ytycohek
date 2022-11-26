import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  UPDATE_FIELD_HOME_PAGE,
} from "../constants/actionTypes";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case HOME_PAGE_LOADED:
      return {
        ...state,
        tags: action.payload[0].tags,
        searchInput: "",
        isSearchVisible: false,
      };
    case HOME_PAGE_UNLOADED:
      return {};
    case UPDATE_FIELD_HOME_PAGE:
      return { ...state, [action.key]: action.value };
    default:
      return state;
  }
};

export default reducer;
