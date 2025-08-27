import { useRef, useState } from "react";
import { useRouter } from "expo-router";
import {
  Text,
  Alert,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import SafeAreaWrapper from "@/components/ui/atoms/SafeAreaWrapper";
import useLogin from "@/hooks/auth/useLogin";

export default function LoginScreen() {
  const { doLogin, isLoading } = useLogin();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const passwordRef = useRef<any>(null);

  const router = useRouter();

  const handleLogin = async () => {
    const result = await doLogin({ email, password });

    if (!result.success) {
      Alert.alert("로그인 실패", result.message);
      return;
    }

    router.replace("/");
  };

  return (
    <SafeAreaWrapper className="flex-1 justify-center items-center bg-white px-6">
      <Text className="text-3xl font-extrabold mb-8 text-gray-800">로그인</Text>

      <TextInput
        className="w-full border border-gray-300 rounded-xl p-4 mb-4 text-gray-800"
        placeholder="이메일"
        placeholderTextColor="#4B5563"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        returnKeyType="next"
        onSubmitEditing={() => passwordRef.current?.focus()}
      />

      <TextInput
        className="w-full border border-gray-300 rounded-xl p-4 mb-6 text-gray-800"
        placeholder="비밀번호"
        placeholderTextColor="#4B5563"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        ref={passwordRef}
        returnKeyType="done"
        onSubmitEditing={handleLogin}
      />

      <View className="w-full flex items-center space-y-2 mt-4">
        <TouchableOpacity
          className="w-full bg-blue-600 rounded-xl py-4 mb-4"
          onPress={handleLogin}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text className="text-center text-white text-lg font-semibold">
              로그인
            </Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/signup")}>
          <Text className="text-blue-600 font-medium text-lg">회원가입</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaWrapper>
  );
}
