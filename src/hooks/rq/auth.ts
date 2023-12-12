import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuthStore } from "..";
import { useEffect } from "react";
export const USER_QK = ["/user"];

interface LoginUserPayload {
  phone: string;
  password: string;
}
const loginUser = (payload: LoginUserPayload) => {
  const { phone, password } = payload;
  return new Promise<any>((resolve, reject) => {
    setTimeout(() => {
      if (phone && password) {
        localStorage.setItem("token", "FAKE_TOKEN");
        return resolve({
          status: 200,
          data: payload,
        });
      } else {
        return reject({
          status: 422,
        });
      }
    }, 1000);
  });
};

const getUser = () => {
  const token = localStorage.getItem("token");

  if (token) {
    return { phone: "12345", fullName: "زهرا رئیسی" };
  }

  return false;
};

const logoutUser = () => {
  localStorage.removeItem("token");
};

export const useLoginUser = () => {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: loginUser,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: USER_QK }),
  });

  return [mutate, { isPending }] as const;
};

export const useUser = () => {
  const { data, isLoading } = useQuery({
    queryKey: USER_QK,
    queryFn: getUser,
  });

  const setUser = useAuthStore((state) => state.setUser);
  const toggleAuth = useAuthStore((state) => state.toggleAuth);

  useEffect(() => {
    if (data) {
      toggleAuth(true);
      setUser(data);
    } else {
      toggleAuth(false);
      setUser(undefined);
    }
  }, [data]);

  return [data, { isLoading }] as const;
};

export const useLogoutUser = () => {
  const queryClient = useQueryClient();
  return () => {
    logoutUser();
    queryClient.invalidateQueries({ queryKey: USER_QK });
  };
};
