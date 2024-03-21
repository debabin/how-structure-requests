import { api } from '@/api/ky/instance';

export type GetPostsConfig = KyRequestConfig;

export const getPosts = async (requestConfig?: GetPostsConfig) =>
  api.get('posts', requestConfig?.config).json<Promise<PostsResponse>>();
