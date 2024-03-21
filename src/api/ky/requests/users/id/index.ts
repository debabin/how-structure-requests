import { api } from '@/api/ky/instance';

export interface GetUserParams {
  id: string;
}
export type GetUserConfig = KyRequestConfig<GetUserParams>;

export const getUsersId = async ({ params, config }: GetUserConfig) =>
  api.get(`/users/${params.id}`, config).json<Promise<UserResponse>>();
