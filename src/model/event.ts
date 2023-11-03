export type ApiResponse<T = object> = {
  code: number;
  message: string;
  timestamp: Date;
  data: T;
};

export type PromiseResponse<T = object> = Promise<ApiResponse<T>>;

export interface EventIdsResponse {
  eventIdList: number[];
}

export interface Event {
  eventId: number;
  title: string;
  streetLoadAddress: string;
  detailAddress: string;
  imageUrl: string;
  eventDateList: Date[];
}
