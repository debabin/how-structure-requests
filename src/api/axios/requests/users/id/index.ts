import { api } from '@/api/axios/instance';

export interface GetUserParams {
  id: string;
}
export type GetUserConfig = AxiosRequestConfig<GetUserParams>;

export const getUsersId = async ({ params, config }: GetUserConfig) =>
  api.get<UserResponse>(`/users/${params.id}`, config);
