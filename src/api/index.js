import axios from "axios";
export const getPlacesData = async (sw, ne) => {
  try {
    //request
    const {
      data: { data }
    } = await axios.get(`https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng
      },
      headers: {
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        "x-rapidapi-key": '89b74c5705msh7f88e89bb23d500p150ef4jsn7b0fc85cd36c'
      }
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
