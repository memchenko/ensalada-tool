const { writeFileSync } = require("fs");

const exportedData = require("../transformed-data.json");

const regex = /@[0-9.,]+z/;

function processUrl(url, index) {
  const coordsStr = regex.exec(url);

  if (coordsStr === null) {
    console.log(index, ":", url);
    return;
  }

  const clearedStr = coordsStr[0].slice(1, -1).split(",");

  exportedData[index].coords = [Number(clearedStr[0]), Number(clearedStr[1])];
}

function main() {
  for (let i = 0; i < exportedData.length; i++) {
    const item = exportedData[i];

    processUrl(item.finalMapUrl, i);
  }

  writeFileSync(
    "./data-with-coords.json",
    JSON.stringify(exportedData, null, 2),
    "utf8"
  );
}

main();
