// 성공 응답
export interface ApiResponse<T> {
  success: true;
  data: T;
}

// 서버 정의 에러
export interface ApiErrorResponse {
  success: false;
  message: string;
  errors?: Record<string, string>; // 필드 유효성 에러
  status?: number; // HTTP 상태코드
}

// 전체 API 결과 타입
export type APIResult<T> = ApiResponse<T> | ApiErrorResponse;
