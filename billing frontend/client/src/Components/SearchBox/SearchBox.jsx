import { useState } from 'react';

const SearchBox = ({onSearch}) => {

const [searchText, setSearchText] = useState("");
const hanndleInputChange = (e) => {
    const text = e.target.value;
    setSearchText(text);
    onSearch(text);
}
  return (
    <div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search items..."
          value={searchText}
          onChange={hanndleInputChange}
        />
        <span className="input-group-text bg-warning">
          <i className="bi bi-search"></i>
        </span>
      </div>
    </div>
  );
};

export default SearchBox;