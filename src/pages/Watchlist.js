// import React, { useEffect, useState } from "react";
// import Button from "../components/Common/Button";
// import Header from "../components/Common/Header";
// import Loader from "../components/Common/Loader";
// import TabsComponent from "../components/Dashboard/Tabs";
// import { get100Coins } from "../functions/get100Coins";
// import { Link } from "react-router-dom";

// function WatchlistPage() {
//   const coins = JSON.parse(localStorage.getItem("watchlist")) || [];
//   const [myWatchlist, setMyWatchlist] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     getData();
//   }, []);

//   const getData = async () => {
//     setLoading(true);
//     const allCoins = await get100Coins();
//     if (coins) {
//       setMyWatchlist(allCoins.filter((item) => coins.includes(item.id)));
//     }
//     setLoading(false);
//   };

//   return (
//     <div>
//       {loading || !coins ? (
//         <Loader />
//       ) : (
//         <div style={{ minHeight: "90vh" }}>
//           {myWatchlist?.length === 0 || !coins ? (
//             <div>
//               <Header />
//               <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
//                 No Items in the Watchlist
//               </h1>
//               <div style={{ display: "flex", justifyContent: "center" }}>
//                 <Link to="/dashboard">
//                   <Button
//                     text={"Dashboard"}
//                     onClick={() => console.log("btn Clicked")}
//                   />
//                 </Link>
//               </div>
//             </div>
//           ) : (
//             <div style={{ height: "95vh" }}>
//               <Header />
//               <TabsComponent coins={myWatchlist} isWatchlistPage={true} />
//             </div>
//           )}
//         </div>
//       )}

//     </div>
//   );
// }

// export default WatchlistPage;

import React, { useEffect, useState } from "react";
import Button from "../components/Common/Button";
import Header from "../components/Common/Header";
import Loader from "../components/Common/Loader";
import TabsComponent from "../components/Dashboard/Tabs";
import { get100Coins } from "../functions/get100Coins";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

function WatchlistPage() {
  const coins = JSON.parse(localStorage.getItem("watchlist")) || [];
  const [myWatchlist, setMyWatchlist] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // Initialize the navigate function
  const [timer, setTimer] = useState(5); // Set an initial timer value (in seconds)

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    const allCoins = await get100Coins();
    if (coins) {
      setMyWatchlist(allCoins.filter((item) => coins.includes(item.id)));
    }
    setLoading(false);
  };

  useEffect(() => {
    // Create an interval to update the timer every second
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        clearInterval(interval);
        navigate("/dashboard"); // Redirect to the dashboard after the timer expires
      }
    }, 1000); // Update the timer every 1000 milliseconds (1 second)

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [navigate, timer]);

  return (
    <div>
      {loading || !coins ? (
        <Loader />
      ) : (
        <div style={{ minHeight: "90vh" }}>
          {myWatchlist?.length === 0 || !coins ? (
            <div>
              <Header />
              <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
                No Items in the Watchlist
              </h1>
              <p style={{ textAlign: "center", marginBottom: "2rem" }}>
                Redirecting to dashboard in {timer} seconds...
              </p>
            </div>
          ) : (
            <div style={{ height: "95vh" }}>
              <Header />
              <TabsComponent coins={myWatchlist} isWatchlistPage={true} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default WatchlistPage;
