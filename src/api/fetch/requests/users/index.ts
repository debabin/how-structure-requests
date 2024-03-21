import { api } from '@/api/fetch/instance';

export type GetUsersConfig = FetchRequestConfig;

export const getUsers = async (requestConfig?: GetUsersConfig) =>
  api.get<UsersResponse>('users', requestConfig?.config);

export type PostUserParams = Omit<User, 'id'>;
export type PostUserConfig = FetchRequestConfig<PostUserParams>;

export const postUsers = async ({ params, config }: PostUserConfig) =>
  api.post('users', params, config);
