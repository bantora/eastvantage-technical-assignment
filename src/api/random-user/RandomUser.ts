import type { User } from "./types";

import axios from "axios";

const url = "https://randomuser.me/api";

export const getRandomUser = async (): Promise<User> => {
  try {
    const response = await axios.get<User>(url);
    return response.data;
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
};
