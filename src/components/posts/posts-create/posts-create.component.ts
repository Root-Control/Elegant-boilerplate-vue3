import { CreatePostDto } from '@/@common/types/post';
import { Options, Vue } from 'vue-class-component';
import PostsService from '../posts.service';

@Options({
  props: {
    msg: String
  }
})
export default class PostsCreateComponent extends Vue {
  msg = 'Create';
  showAlert = false;
  createPostDto: CreatePostDto = {
    body: '', 
    title: '',
    userId: ''
  };
  
  created() {
    console.log('create comp')
  }

  mounted(): void {
    console.log('Mounted');
  }

  async createPost(): Promise<void> {
    try {
      const newPost = await PostsService.create(this.createPostDto);
      this.showAlert = true;
      console.log(newPost);
    } catch (error) {
      console.log(error);
    }
  }
}