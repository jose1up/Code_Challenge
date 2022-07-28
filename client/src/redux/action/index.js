import axios from "axios";
const baseURL = process.env.REACT_APP_API;
export const GET_TEXT = "GET_TEXT";

export const getText = (text) => {
  try {
    return async (dispatch) => {
      const { data } = await axios.get(`http://localhost:3001/iecho?text=${text}`);
      return dispatch({
        type: GET_TEXT,
        payload: data,
      });
    };
  } catch (error) {
    console.error(error);
  }
};
