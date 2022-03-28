const ParseCSV = (csv) => {
  const nutrient = [];
  const lines = csv.split("\n");
  var headers = lines[0].split(",");
  for (var i = 1; i < lines.length; i++) {
    var obj = {};
    var currentline = lines[i].split(",");

    for (var j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j];
    }
    nutrient.push(obj);
  }
  return nutrient;
};

export default ParseCSV;
