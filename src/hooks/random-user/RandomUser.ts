import type { User } from "../../api/random-user/types";

import { useEffect, useState } from "react";

import { getRandomUser } from "../../api/random-user/RandomUser";
import { UserValues } from "../../util/InitialValues";

interface UserReturnType {
  user: User;
  loading: boolean;
  error: string | null;
  fetchUser: () => void;
}

export const useRandomUser = (): UserReturnType => {
  const [user, setUser] = useState<User>(UserValues);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUser = async (): Promise<void> => {
    setLoading(true);
    try {
      const data = await getRandomUser();
      setUser(data);
      localStorage.setItem("userData", JSON.stringify(data));
      setError(null);
    } catch (err) {
      console.error("Failed to fetch user:", err);
      setError(`Failed to fetch user`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      fetchUser();
    }
  }, []);

  return {
    user,
    loading,
    error,
    fetchUser,
  };
};
