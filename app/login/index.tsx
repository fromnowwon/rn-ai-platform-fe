import { useState } from "react";
import { useRouter } from "expo-router";
import { Text, Alert, View } from "react-native";
import SafeAreaWrapper from "@/components/ui/atoms/SafeAreaWrapper";
import useLogin from "@/hooks/auth/useLogin";
import { Button, Input, TextButton } from "@/components/ui";

export default function LoginScreen() {
  const { doLogin, isLoading } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleLogin = async () => {
    const result = await doLogin({ email, password });

    if (!result.success) {
      Alert.alert("로그인 실패", result.message);
      return;
    }

    Alert.alert("로그인 성공", "로그인에 성공했습니다.");
  };

  return (
    <SafeAreaWrapper className="flex-1 justify-center items-center bg-white px-6">
      <Text className="text-3xl font-extrabold mb-8 text-gray-800">로그인</Text>

      <Input value={email} onChange={setEmail} placeholder="이메일" />

      <Input
        value={password}
        onChange={setPassword}
        placeholder="비밀번호"
        secureTextEntry
      />

      <View className="w-full flex items-center mt-4">
        <Button
          onPress={handleLogin}
          title={isLoading ? "로딩 중..." : "로그인"}
          loading={isLoading}
        />

        <TextButton
          title="회원가입"
          className="text-blue-600 font-medium"
          onPress={() => router.push("/signup")}
        />
      </View>
    </SafeAreaWrapper>
  );
}
