import { api } from '@/api/axios/instance';

export type GetUsersConfig = AxiosRequestConfig;

export const getUsers = async (requestConfig?: GetUsersConfig) =>
  api.get<UsersResponse>('users', requestConfig?.config);

export type PostUserParams = Omit<User, 'id'>;
export type PostUserConfig = AxiosRequestConfig<PostUserParams>;

export const postUsers = async ({ params, config }: PostUserConfig) =>
  api.post('users', params, config);
