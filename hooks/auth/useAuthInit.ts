import { useEffect } from "react";
import * as Keychain from "react-native-keychain";
import { useAuthStore } from "@/store/authStore";

export default function useAuthInit() {
  const setToken = useAuthStore((state) => state.setToken);

  useEffect(() => {
    async function initAuth() {
      try {
        const credentials = await Keychain.getGenericPassword();
        if (credentials) {
          setToken(credentials.password);
        }
      } catch (err) {
        console.log("Auth init error:", err);
      }
    }

    initAuth();
  }, []);
}
