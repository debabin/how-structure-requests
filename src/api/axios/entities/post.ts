import { api } from '@/api/axios/instance';

class PostService {
  getPosts(requestConfig?: AxiosRequestConfig) {
    return api.get<PostsResponse>('/posts', requestConfig?.config);
  }
}

export default PostService;
