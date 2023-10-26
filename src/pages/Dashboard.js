import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import TabsComponent from "../components/Dashboard/Tabs";
import Search from "../components/Dashboard/Search";
import Paginations from "../components/Dashboard/Pagination";
import Loader from "../components/Common/Loader";
import BackToTop from "../components/Common/BackToTop";
import { get100Coins } from "../functions/get100Coins";

const DashboardPage = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handlePageChange = (event, value) => {
    setPageNumber(value);
    var startingIndex = (value - 1) * 10;
    setPaginatedCoins(coins.slice(startingIndex, startingIndex + 10));
  };

  const onSearchChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  var filteredCoins = coins.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.symbol.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const myCoins = await get100Coins();
    if(myCoins){
      setCoins(myCoins);
      setPaginatedCoins(myCoins.slice(0, 10));
      setIsLoading(false);
    }
   
  };
  return (
    <>
      <Header />
      <BackToTop />
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Search search={search} onSearchChange={onSearchChange} />
          <TabsComponent coins={search ? filteredCoins : paginatedCoins} />
          {!search && (
            <Paginations
              pageNumber={pageNumber}
              handleChange={handlePageChange}
            />
          )}
        </div>
      )}
    </>
  );
};

export default DashboardPage;
