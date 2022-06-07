import serviceCallApi from "../services/ServicesCallAPI";

async function signing({ email, password }, apiContext = {}) {
  const data = { email, password };
  try {
    const result = await serviceCallApi("login", "POST", data);
    const response = { token: result.data.token, user: result.data };
    return response;
  } catch (error) {
    return error;
  }
}


export { signing };
