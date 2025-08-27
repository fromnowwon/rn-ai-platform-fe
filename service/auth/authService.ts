import { LoginRequest, LoginResponse } from "@/types/auth";
import { APIResult } from "@/types/common/api";
import { Platform } from "react-native";
import { TokenService } from "./tokenService";

const API_URL =
  Platform.OS === "web"
    ? process.env.EXPO_PUBLIC_API_URL_WEB
    : process.env.EXPO_PUBLIC_API_URL;

/**
 * 로그인 요청
 * @param request LoginRequest 타입 (email, password)
 * @returns APIResult<LoginResponse> - 성공 시 ApiResponse<LoginResponse>, 실패 시 ApiErrorResponse
 */
export async function login(
  request: LoginRequest
): Promise<APIResult<LoginResponse>> {
  try {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request),
    });

    const data = await res.json();

    if (data.success) {
      const token = data.data.token;

      await TokenService.save(token);
    }

    return data;
  } catch (err: any) {
    // 서버까지 요청이 도달하지 못했거나, 서버 응답이 아예 없는 경우
    return { success: false, message: err.message };
  }
}
