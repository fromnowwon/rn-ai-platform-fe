import { ReactNode } from "react";
import { View, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface SafeAreaWrapperProps {
  children: ReactNode;
  className?: string;
}

/**
 * SafeAreaWrapper
 *
 * 플랫폼에 따라 SafeArea 처리를 다르게 적용하는 Atomic 컴포넌트입니다.
 * - 모바일(iOS, Android): SafeAreaView 사용
 * - 웹: 일반 View 사용
 */
export default function SafeAreaWrapper({
  children,
  className,
}: SafeAreaWrapperProps) {
  const Wrapper = Platform.OS === "web" ? View : SafeAreaView;

  return (
    <Wrapper className={className ?? "flex-1 bg-white"}>{children}</Wrapper>
  );
}
