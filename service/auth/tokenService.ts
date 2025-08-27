import { Platform } from "react-native";
import * as Keychain from "react-native-keychain";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TOKEN_KEY = "token";

/**
 * TokenService
 * - JWT 토큰을 안전하게 저장, 조회, 삭제하는 서비스
 * - 웹에서는 AsyncStorage 사용
 * - 모바일 네이티브에서는 Keychain 사용 (Expo Go 등 Keychain 미지원 시 AsyncStorage fallback)
 */
export const TokenService = {
  /**
   * 토큰 저장
   * @param token JWT 문자열
   */
  save: async (token: string) => {
    if (Platform.OS === "web") {
      await AsyncStorage.setItem(TOKEN_KEY, token);
    } else {
      try {
        // 네이티브 앱에서는 Keychain 사용
        await Keychain.setGenericPassword(TOKEN_KEY, token);
      } catch {
        // Expo Go 등 Keychain 미지원 환경에서는 AsyncStorage fallback
        await AsyncStorage.setItem(TOKEN_KEY, token);
      }
    }
  },

  /**
   * 토큰 조회
   * @returns JWT 문자열 또는 null
   */
  get: async (): Promise<string | null> => {
    if (Platform.OS === "web") {
      return AsyncStorage.getItem("token");
    } else {
      try {
        const credentials = await Keychain.getGenericPassword();
        if (credentials) return credentials.password;
        return null;
      } catch {
        return AsyncStorage.getItem("token");
      }
    }
  },

  /**
   * 토큰 삭제
   */
  remove: async () => {
    if (Platform.OS === "web") {
      await AsyncStorage.removeItem(TOKEN_KEY);
    } else {
      try {
        await Keychain.resetGenericPassword();
      } catch {
        await AsyncStorage.removeItem(TOKEN_KEY);
      }
    }
  },
};
