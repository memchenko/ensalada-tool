export enum Categories {
  // поесть и выпить
  Restaurant = 'restaurant',
  // культура
  Culture = 'culture',
  // локации (фото)
  Sightseeing = 'sightseeing',
  // для работы
  Coworking = 'coworking',
  // для спорта
  Sport = 'sport',
  // услуги
  Service = 'service',
  // магазины и скидки
  Shop = 'shop',
}

export type SubCategories = CafeCategories;

export enum CafeCategories {
  // азиатская
  Asian = 'asian',
  // латиноамериканская
  Latin = 'latin',
  // кофейня/кондитерская
  Coffee = 'coffee',
  // ближневосточная
  NearEast = 'near-east',
  // тапасы
  Tapas = 'tapas',
  // индийская
  Indian = 'indian',
  // бар
  Bar = 'bar',
  // гастробар
  GastroBar = 'gastro-bar',
  // итальянская
  Italian = 'italian',
  // завтраки
  Breakfast = 'breakfast',
  // здоровая еда
  HealthyFood = 'healthy-food',
  // российская
  Russian = 'russian',
}
