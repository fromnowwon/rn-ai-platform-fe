import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  TouchableOpacityProps,
} from "react-native";
import React from "react";

interface ButtonProps extends TouchableOpacityProps {
  onPress: () => void;
  title: string;
  loading?: boolean;
  className?: string; // 추가
}

export default function Button({
  onPress,
  title,
  loading,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={loading}
      className={`w-full bg-blue-600 rounded-xl py-4 mb-4 ${className}`}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text className="text-center text-white font-semibold">{title}</Text>
      )}
    </TouchableOpacity>
  );
}
