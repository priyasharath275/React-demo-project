import './index.css'

const SearchBar = ({ value, inputChange, placeholder, btName,btnClickHadler }) => {
  return (
    <>
      <div className="search-bar">
        <input
          className="input-search"
          value={value}
          type="text"
          placeholder={placeholder}
          onChange={inputChange}
        ></input>
        <button className="search-btn" onClick={btnClickHadler}>{btName}</button>
      </div>
    </>
  );
};

export default SearchBar;
