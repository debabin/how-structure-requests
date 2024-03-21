import { api } from '@/api/axios/instance';

export type GetPostsConfig = AxiosRequestConfig;

export const wrongGetPosts = async (requestConfig?: GetPostsConfig) => {
  const response = await api.get<PostsResponse>('posts', requestConfig?.config);

  window.location.href = '/posts';
  return response.data;
};

export const getPosts = async (requestConfig?: GetPostsConfig) =>
  api.get<PostsResponse>('posts', requestConfig?.config);
