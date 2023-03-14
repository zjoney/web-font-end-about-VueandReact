export interface Result<T> {
  ok: 0 | 1;
  data: T;
}