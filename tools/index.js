const axios = require("axios");
const data = require("./final-data.json");

const url =
  "https://ensalada-tool-csdlol7xaa-uc.a.run.app/recommendations/places";

const mapCategory = (cat) => {
  return Object.entries({
    "поесть и выпить": "restaurant",
    культура: "culture",
    локации: "sightseeing",
    "для работы": "coworking",
    "для спорта": "sport",
    услуги: "service",
    "магазины и скидки": "shop",
  }).reduce((acc, [key, value]) => {
    return cat.toLowerCase().includes(key) ? value : acc;
  }, "sightseeing");
};
const mapSubCategory = (cat) => {
  return Object.entries({
    азиатская: "asian",
    латиноамериканская: "latin",
    кофейня: "coffee",
    ближневосточная: "near-east",
    тапасы: "tapas",
    индийская: "indian",
    бар: "bar",
    гастробар: "gastro-bar",
    итальянская: "italian",
    завтраки: "breakfast",
    здоровая: "healthy-food",
    российская: "russian",
  }).reduce((acc, [key, value]) => {
    return cat.toLowerCase().includes(key) ? value : acc;
  }, null);
};

async function main() {
  for (let i = 0; i < data.length; i++) {
    const item = data[i];

    try {
      await axios.post(url, {
        title: item.title || "",
        description: item.description || "",
        author: item.author ? item.author.toLowerCase() : null,
        categories: item.categories.map(mapCategory),
        subCategories: item.extraKitchenOrFormat
          ? item.extraKitchenOrFormat.map(mapSubCategory)
          : null,
        photos: item.photos && item.photos.length > 0 ? item.photos : null,
        latitude: item.coords[0],
        longitude: item.coords[1],
      });
    } catch (err) {
      console.log(i, ":", err.message);
    }
  }
}

(async () => {
  await main();
})();
