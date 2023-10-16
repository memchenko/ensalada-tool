const { https, http } = require("follow-redirects");
const { writeFileSync } = require("fs");

const exportedData = require("../exported-data.json");

function wait() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 5000);
  });
}

function processUrl(url, index) {
  return new Promise((resolve, reject) => {
    let protocol = http;

    if (url.startsWith("https")) {
      protocol = https;
    }

    if (!url.startsWith("http")) {
      console.log(index, ":", "No protocol");
      reject();
      return;
    }

    const request = protocol.request(url, (response) => {
      exportedData[index].finalMapUrl = response.responseUrl;

      resolve();
    });

    request.on("error", (err) => {
      console.log(index, ":", err.message);
      reject();
    });
    request.end();
  });
}

async function main() {
  for (let i = 0; i < exportedData.length; i++) {
    const item = exportedData[i];

    try {
      await processUrl(item.mapUrl, i);
      await wait();
    } catch (err) {
      continue;
    }
  }

  writeFileSync(
    "./transformed-data.json",
    JSON.stringify(exportedData, null, 2),
    "utf8"
  );
}

(async () => {
  await main();
})();
