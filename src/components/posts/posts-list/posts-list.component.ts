import { Options, Vue } from 'vue-class-component';
import PostsService from '../posts.service';
import { PostDto } from '@/@common/types/post';

@Options({
  props: {
    msg: String
  }
})
export default class PostsListComponent extends Vue {
  public posts: PostDto[] = [];
  msg!: string

  created() {
    console.log('post list');
  }

  async mounted() {
      this.loadPosts();
  }

  async loadPosts() {
    try {
      this.posts = await PostsService.getAll();
    } catch (ex) {
      console.log('Error loading posts');
    }
  }

}