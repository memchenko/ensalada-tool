const Airtable = require("airtable");
const { writeFileSync } = require("fs");

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey:
    "patjUhst3wgHukrwn.1e3d8e1e97196bdb8a141e2a253432f3446583a13e90469893414f287c416d34",
});

const base = Airtable.base("appOFyqnLttjgvODG");

const data = [];

base("Рекомендации салатиков")
  .select({
    view: "Рекомендации салатиков",
    maxRecords: 68,
  })
  .eachPage(
    function page(records, fetchNextPage) {
      records.forEach(function (record) {
        data.push({
          title: record.get("Название места"),
          description: record.get("Комментарий"),
          author: record.get("Твой логин в Телеграм"),
          categories: record.get("Тип"),
          mapUrl: record.get("Локейшен (google map)"),
          photos: record.get("Фото"),
          extraGrade: record.get("Оценка"),
          extraKitchenOrFormat: record.get("Кухня или формат"),
        });
      });
      fetchNextPage();
    },
    function done(err) {
      if (err) {
        console.error(err);
        return;
      }
      console.log(data.length);
      writeFileSync(
        "./new-exported-data.json",
        JSON.stringify(data, null, 2),
        "utf8"
      );
    }
  );
