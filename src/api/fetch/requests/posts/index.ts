import { api } from '@/api/fetch/instance';

export type GetPostsConfig = FetchRequestConfig;

export const getPosts = async (requestConfig?: GetPostsConfig) =>
  api.get<PostsResponse>('posts', requestConfig?.config);
