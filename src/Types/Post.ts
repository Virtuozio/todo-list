export interface PostI {
  id: number;
  title: string;
  body: string;
}

export interface PostState {
  posts: PostI[];
}
