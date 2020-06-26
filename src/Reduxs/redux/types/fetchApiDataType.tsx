export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';

export interface Paragraph {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface ParagraphState {
  data: Paragraph[];
  isLoading: boolean;
  isError: boolean;
}

interface FetchPostsRequest {
  type: typeof FETCH_REQUEST;
}

interface FetchPostsSuccess {
  type: typeof FETCH_SUCCESS;
  payload: {paragraph: Paragraph[]};
}

interface FetchPostsError {
  type: typeof FETCH_ERROR;
}

export type ParagraphActionTypes =
  | FetchPostsRequest
  | FetchPostsSuccess
  | FetchPostsError;
