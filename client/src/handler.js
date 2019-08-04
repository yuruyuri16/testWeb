import axios from "axios";

export const query = async () => {
  const base = `http://localhost:9000/response`;
  let r;
  try {
    r = await axios.get(base);
    r = JSON.stringify(r);

    return r;
  } catch (e) {
    throw e;
  }
};
