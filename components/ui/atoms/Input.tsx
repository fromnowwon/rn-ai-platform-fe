import { TextInput, Text } from "react-native";
import React from "react";

interface InputProps {
  value: string;
  onChange: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  error?: string;
  className?: string;
}

export default function Input({
  value,
  onChange,
  placeholder,
  secureTextEntry,
  error,
  className = "",
  ...props
}: InputProps) {
  return (
    <>
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        className={`w-full border border-gray-300 rounded-xl p-4 mb-1 text-gray-800 ${className}`}
        {...props}
      />
      {error && <Text className="text-red-500 mb-2">{error}</Text>}
    </>
  );
}
