

// Ф-ция  для создания акуальной ссылки иконок погоды
export const getIconPage = (e: number | null | string): string => {
  let URL_Image = `http://openweathermap.org/img/w/`;
  if (e == null || e === "") {
    URL_Image = `https://th.bing.com/th/id/OIP.vDf037OKUo0H03weRxdWuAHaHa?rs=1&pid=ImgDetMain`;
  } else {
    URL_Image = `http://openweathermap.org/img/w/` + e + `.png`;
  }
  return URL_Image;
};

// Ф-ция для корректного отображения даты и дня недели
const optionsTime: optionsData = {
  month: "long",
  day: "numeric",
  weekday: "long",
  /*  year: 'numeric', */
};

export const getDataPage = (e: string): string => {
  const time = new Date(e);
  return time.toLocaleString("ru", optionsTime);
};
