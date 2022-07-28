import axios from "axios";
import "dotenv/config";
const baseURL = process.env.REACT_APP_API_URL;
export const GET_TEXT = "GET_TEXT";

export const getText = (text) => {
  try {
    return async (dispatch) => {
      console.log(baseURL);
      const { data } = await axios.get(`${baseURL}/iecho?text=${text}`);
      return dispatch({
        type: GET_TEXT,
        payload: data,
      });
    };
  } catch (error) {
    console.error(error);
  }
};
