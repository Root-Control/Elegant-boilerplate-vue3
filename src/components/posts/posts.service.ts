import { CreatePostDto, PostDto } from '@/@common/types/post';
import axios from 'axios';

class PostsService {
  url = 'https://jsonplaceholder.typicode.com/posts';
  async getAll() {
    const response = await axios.get<PostDto[]>(this.url);
    return response.data;
  }

  async create(createPostDto: CreatePostDto) {
    const response = await axios.post<PostDto>(this.url, createPostDto);
    return response.data;
  }
}

export default new PostsService();