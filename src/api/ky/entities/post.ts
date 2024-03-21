import { api } from '@/api/ky/instance';

class PostService {
  getPosts(requestConfig?: FetchRequestConfig) {
    return api.get('posts', requestConfig?.config).json<Promise<PostsResponse>>();
  }
}

export default PostService;
