const { https } = require("follow-redirects");
const Airtable = require("airtable");

const airtable = new Airtable({
  endpointUrl: "https://airtable.com/shrQ4lPRv85wP8O0C/tblCc1g45NO9bbAC8",
});

airtable.select().firstPage((result) => console.log(result));

function getFinalDestination() {
  // example
  const request = https.request(
    {
      host: "maps.app.goo.gl",
      path: "/RTTkfag2gA6vLAdj9",
    },
    (response) => {
      console.log(response.responseUrl);
    }
  );
  request.end();
}
