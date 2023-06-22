import axios from "axios";

const USERS_API_URL = "https://testapi.io/api/rokasandreikenas/resource/user";

export const fetchUsers = () => {
  return axios.get(USERS_API_URL).then((response) => response.data.data);
};

export const createUser = (user) => {
  return axios
    .post(USERS_API_URL, { ...user, role: "admin" })
    .then((response) => response.data);
};

export const loginUser = async (loggingUser) => {
  const users = await fetchUsers();
  return new Promise((resolve, reject) => {
    const { email, password } = loggingUser;
    const userChecker = (u) => u.email === email && u.password === password;
    const existingUser = users.find(userChecker);

    existingUser ? resolve(existingUser) : reject("Invalid credentials");
  });
};
