import { SafeAreaView, Text, Button } from "react-native";
import { useRouter } from "expo-router";
import { useAuthStore } from "@/store/authStore";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !isLoggedIn) {
      router.replace("/login");
    }
  }, [mounted, isLoggedIn, router]);

  if (!isLoggedIn) return null;

  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Text className="text-lg font-bold">Hello World</Text>
      <Button title="로그인하기" onPress={() => router.push("/login")} />
    </SafeAreaView>
  );
}
