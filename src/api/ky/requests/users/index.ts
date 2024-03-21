import { api } from '@/api/ky/instance';

export type GetUsersConfig = KyRequestConfig;

export const getUsers = async (requestConfig?: GetUsersConfig) =>
  api.get('users', requestConfig?.config).json<UsersResponse>();

export type PostUserParams = Omit<User, 'id'>;
export type PostUserConfig = KyRequestConfig<PostUserParams>;

export const postUsers = async ({ params, config }: PostUserConfig) =>
  api.post('users', { json: params, ...config }).json();
