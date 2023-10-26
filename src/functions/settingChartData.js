// import { convertDate } from "./convertDate";

// export const settingChartData = (setChartData, prices1, prices2) => {
//   if (prices2) {
//     setChartData({
//       labels: prices1.map((item) => convertDate(item[0])),
//       datasets: [
//         {
//           label : 'Crypto 1',
//           data: prices1.map((price) => price[1]),
//           borderColor: "#3a80e9",
//           borderWidth: 2,
//           fill: false,
//           tension: 0.25,
//           pointRadius: 0,
         
//         },
//         {
//           label : 'Crypto 1',
//           data: prices2.map((price) => price[1]),
//           borderColor: "#61c96f",
//           borderWidth: 1,
//           fill: false,
//           tension: 0.25,
//           pointRadius: 0,
//            yAxisID: 'crypto2',
//         },
//       ],
//     });
//   } else {
//     setChartData({
//       labels: prices1.map((item) => convertDate(item[0])),
//       datasets: [
//         {
//           data: prices1.map((price) => price[1]),
//           borderColor: "#3a80e9",
//           borderWidth: 1,
//           fill: true,
//           tension: 0.25,
//           backgroundColor: "rgba(58,128,233,0.1)",
//           pointRadius: 0,
//         },
//       ],
//     });
//   }
// };


import { convertDate } from "./convertDate";

export const settingChartData = (
  setChartData,
  prices1,
  prices2
) => {
  setChartData({
    labels: prices1.map((data) => convertDate(data[0])),
    datasets: [
      {
        label : 'Crypto 1',
        data: prices1.map((data) => data[1]),
        borderWidth: 1,
        fill: true,
        tension: 0.15,
        backgroundColor: prices2 ? "transparent" : "rgba(23,340,114,0.1)",
        borderColor: "green",
        pointRadius: 1,
      },
      prices2 && {
        label : 'Crypto 1',
        data: prices2.map((data) => data[1]),
        borderWidth: 1,
        fill: true,
        tension: 0.15,
        backgroundColor: prices2 ? "transparent" : "rgba(417, 201, 111,0.1)",
        borderColor: "#61c96f",
        pointRadius: 1,
        yAxisID: "y2",
      },
    ],
  });
};