import React from "react";
import logo from "../../imgs/logo.png";

const SEARCH_INPUT_FIELD_NAME = "searchInput";
const SEARCH_INPUT_UPDATE_LIMIT = 3;

const Banner = ({ searchInput, onUpdateField }) => {

  const iconStyling = { color: '#8571c6', borderLeft: 0, borderTopLeftRadius: 0, borderBottomLeftRadius: 0, fontSize: '1rem', backgroundColor: 'white' };

  const inputStyling = { borderRight: 0 };

  const onChangeSearchInput = (event) => {
    if (event.target.value.length >= SEARCH_INPUT_UPDATE_LIMIT) {
      return onUpdateField(SEARCH_INPUT_FIELD_NAME, event.target.value)
    }
  }

  return (
    <div className="banner text-white" >
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div className="container">
          <div className="row justify-content-lg-center align-items-center">
            <span>A place to </span>
            <span id="get-part">get </span>
            <div className="col col-lg-4 input-group">
              <input
                className="form-control"
                id="search-box"
                placeholder="What is that you truly desire?"
                value={searchInput}
                onChange={onChangeSearchInput}
                type='text'
                style={inputStyling}
              />
              <div class="input-group-text" style={iconStyling}>
                <i className="bi bi-search" ></i>
              </div>
            </div>
            <span> the cool stuff.</span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Banner;
