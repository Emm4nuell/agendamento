export interface PageableType<T> {
  content: T[];
  totalPages: number;
  pageNumber?: number;
  pageSize?: number;
  totalElements?: number;
  number?: number;
}
