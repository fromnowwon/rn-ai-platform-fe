import { Slot } from "expo-router";
import { View } from "react-native";
import "react-native-reanimated";
import "@/global.css";

export default function RootLayout() {
  return (
    <View className="flex-1 bg-white">
      <Slot />
    </View>
  );
}
