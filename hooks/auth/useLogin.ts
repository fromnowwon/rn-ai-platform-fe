import { login } from "@/service/auth/authService";
import { LoginRequest, LoginResponse } from "@/types/auth";
import { APIResult } from "@/types/common/api";
import { useState } from "react";

export default function useLogin() {
  const [isLoading, setIsLoading] = useState(false);

  const doLogin = async (
    credentials: LoginRequest
  ): Promise<APIResult<LoginResponse>> => {
    setIsLoading(true);

    try {
      const result = await login(credentials);
      return result;
    } finally {
      setIsLoading(false);
    }
  };

  return { doLogin, isLoading };
}
