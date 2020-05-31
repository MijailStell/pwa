export interface IJsonResult<TData> {
  valid?: boolean;
  message?: string;
  detail?: string;
  data?: TData;
  warning?: boolean;
}
