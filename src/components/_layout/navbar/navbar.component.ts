import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String
  }
})
export default class NavBarComponent extends Vue {  
  created() : void {
    console.log('Created');
  }

  mounted(): void {
    console.log('Mounted');
  }
}