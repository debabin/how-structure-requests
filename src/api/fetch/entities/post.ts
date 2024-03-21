import { api } from '@/api/fetch/instance';

class PostService {
  getPosts(requestConfig?: FetchRequestConfig) {
    return api.get<PostsResponse>('/posts', requestConfig?.config);
  }
}

export default PostService;
