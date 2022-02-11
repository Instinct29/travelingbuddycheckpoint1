import axios from "axios";
export const getPlacesData = async (type,sw, ne) => {
  try {
    //request
    const {
      data: { data }
    } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng
      },
      headers: {
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        "x-rapidapi-key": 'f835cb0ac4mshd1783c2ca493872p12a2dajsna1d408a04f93'
      }
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
