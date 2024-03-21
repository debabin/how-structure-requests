import { api } from '@/api/ky/instance';

class UserService {
  getUsers(requestConfig?: FetchRequestConfig) {
    return api.get('users', requestConfig?.config).json<UsersResponse>();
  }

  postUser({ params, config }: FetchRequestConfig<Omit<User, 'id'>>) {
    return api.post('users', { json: params, ...config }).json();
  }

  getUserById({
    params,
    config
  }: FetchRequestConfig<{
    id: string;
  }>) {
    return api.get(`/users/${params.id}`, config).json<Promise<UserResponse>>();
  }
}

export default UserService;
