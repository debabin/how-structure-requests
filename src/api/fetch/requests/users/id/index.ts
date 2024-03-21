import { api } from '@/api/fetch/instance';

export interface GetUserParams {
  id: string;
}
export type GetUserConfig = FetchRequestConfig<GetUserParams>;

export const getUsersId = async ({ params, config }: GetUserConfig) =>
  api.get<UserResponse>(`/users/${params.id}`, config);
