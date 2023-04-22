import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Cards/index";
import SearchBar from "./Search/index.js";
import "./index.css";
import { Link } from "react-router-dom";

const filterData = (searchTxt, restaraunts) => {
  let filtereddata = restaraunts.filter((res) =>
  
    res?.data?.name?.toLowerCase().includes(searchTxt?.toLowerCase())
  );

  return filtereddata;
};
const Body = () => {
  const [allRestaraunts, setAllRestaraunts] = useState([]);
  const [filteredRestnts ,setFilteredRestnts ] =  useState([]);
  const [value, setValue] = useState("");
  const [isFirstRendered ,setFirstRendered] = useState(true);

  const getApiData = async () => {
    let data = await axios("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"); 
       setFilteredRestnts(data?.data?.data?.cards[2]?.data?.data?.cards);
    setAllRestaraunts(data?.data?.data?.cards[2]?.data?.data?.cards)

  };
  useEffect(() => {
    getApiData();
    setFirstRendered(false)
  }, []);

  const inputChange = (e) => {
    setValue(e.target.value);
  };

  const btnClickHadler = () => {
    let data = filterData(value, allRestaraunts);
    setFilteredRestnts(data);
  };

  return (
    <div className="body">
      <SearchBar
        value={value}
        inputChange={inputChange}
        placeholder="Search"
        btName="Search"
        btnClickHadler={btnClickHadler}
      />
      <div className="body-items">
         { filteredRestnts && !isFirstRendered? filteredRestnts.map((val) => {

          return (<Card {...val.data}  key={val.data.id} ><Link id="cards-id"  to={`/restaurant/:${val.data.id}`}>Menu Items</Link></Card>);
        }):<h1>No Restaraunts found</h1>}
      </div>
    </div>
  );
};
//json-server --watch db.json --port 3030
export default Body;
