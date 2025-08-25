import { useState } from "react";
import { useRouter } from "expo-router";
import { Text, TextInput, TouchableOpacity, Alert } from "react-native";
import SafeAreaWrapper from "@/components/ui/atoms/SafeAreaWrapper";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "이메일과 비밀번호를 입력해주세요.");
      return;
    }
    // TODO: 백엔드 API 연동
    Alert.alert("Success", `로그인 시도: ${email}`);
  };

  return (
    <SafeAreaWrapper className="flex-1 justify-center items-center bg-white px-6">
      <Text className="text-3xl font-extrabold mb-8 text-gray-800">로그인</Text>

      <TextInput
        className="w-full border border-gray-300 rounded-xl p-4 mb-4 text-gray-800"
        placeholder="이메일"
        placeholderTextColor="#9ca3af"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        className="w-full border border-gray-300 rounded-xl p-4 mb-6 text-gray-800"
        placeholder="비밀번호"
        placeholderTextColor="#9ca3af"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        className="w-full bg-blue-600 rounded-xl py-4 mb-4"
        onPress={handleLogin}
      >
        <Text className="text-center text-white text-lg font-semibold">
          로그인
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/signup")}>
        <Text className="text-blue-600 font-medium text-lg">회원가입</Text>
      </TouchableOpacity>
    </SafeAreaWrapper>
  );
}
