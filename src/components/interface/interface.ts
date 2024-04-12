interface optionsData {
  year?: string;
  month: string;
  day: string;
  weekday: string;
}


interface putWeather {
  map(arg0: (e: putWeather, index: React.Key | null | undefined) => import("react/jsx-runtime").JSX.Element): React.ReactNode;
  clouds: {
    all: number,
  },
  dt: number,
  dt_txt: string,
  main: {
    feels_like: number;
    grnd_level: number,
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  },
  pop: string,
  sys:{
    pod: string,
  },
  visibility: number,
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ],
  wind: {
    speed: number,
    deg: number,
    gust: number,
  },

}


interface PostsArray {
  props: putWeather;
  userId: number;
  id: number;
  title: string;
  body: string;
}
type Props = {
  props: Array<PostsArray>;
};
