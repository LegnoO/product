const info = localStorage.getItem("userInfo");

export const userdata = info ? JSON.parse(info) : null;
