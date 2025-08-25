import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <View className="flex-1 justify-center items-center">
      <Stack.Screen options={{ title: "Oops!" }} />
      <Text>This screen does not exist.</Text>
    </View>
  );
}
