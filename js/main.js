// var chart = bb.generate({
//   bindto: "#chart",
//   data: {
//     url: "data-source/data.csv",
//     mimeType: "csv"
//   }
// });

var chart = bb.generate({
  "data": {
    "url": "data-source/data.csv",
    "type": "line"
  },
  "bindto": "#chart"
});
