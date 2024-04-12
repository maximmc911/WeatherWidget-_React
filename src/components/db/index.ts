// Ф-ция для проверки на корректноcть передачи данных в URL ссылку. Дефолтное значение города - Москва
export const GetUrl = (el: string | null): string => {
  let town = el;
  
  if (town == null || town == ``) {
    town = `Москва`;
  }
  const WEATHER_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${town}&lang=ru&units=metric&APPID=fcd40524d3e72eaa71d1b2abff666c09`;
  return WEATHER_URL;
};
