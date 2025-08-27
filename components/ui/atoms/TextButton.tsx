import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";

interface TextButtonProps extends TouchableOpacityProps {
  title: string;
  className?: string;
}

export default function TextButton({
  title,
  className = "",
  ...props
}: TextButtonProps) {
  return (
    <TouchableOpacity {...props}>
      <Text className={className}>{title}</Text>
    </TouchableOpacity>
  );
}
