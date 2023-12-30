import { BaseDto } from "./base";

interface CreatePostDto {
  title: string;
  body: string;
  userId: string;
}

interface PostDto extends BaseDto {
  title: string;
  body: string;
  userId: string;
}

export {
  CreatePostDto, 
  PostDto,
};