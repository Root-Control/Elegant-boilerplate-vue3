<template>
  Home
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import PostsList from '@/components/posts/posts-list/posts-list.vue'; // @ is an alias to /src
import NavBar from '@/components/_layout/navbar/navbar.vue';

@Options({
  components: {
    NavBar,
    PostsList,
  },
})
export default class HomeView extends Vue {}
</script>
