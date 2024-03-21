interface User {
  id: number;
  emoji: string;
}

type UsersResponse = User[];
type UserResponse = User;

interface Post {
  text: string;
}

type PostsResponse = Post[];
