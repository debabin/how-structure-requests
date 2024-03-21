import { api } from '@/api/fetch/instance';

// wrong
class WrongUserService {
  async getUsers(): Promise<User[]> {
    const response = await api.get<User[]>('/users');
    return response.data;
  }

  async postUser(user: User): Promise<User> {
    const response = await api.post<User>('/users', user);
    return response.data;
  }

  async getUserById(id: number): Promise<User> {
    const response = await api.get<User>(`/users/${id}`);
    return response.data;
  }
}

class UserService {
  getUsers(requestConfig?: FetchRequestConfig) {
    return api.get<UsersResponse>('/users', requestConfig?.config);
  }

  postUser({ params, config }: FetchRequestConfig<Omit<User, 'id'>>) {
    return api.post('/users', params, config);
  }

  getUserById({
    params,
    config
  }: FetchRequestConfig<{
    id: string;
  }>) {
    return api.get<UserResponse>(`/users/${params.id}`, config);
  }
}

export default UserService;
