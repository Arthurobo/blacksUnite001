<template>
  <div>
          <AddPost />
            <Posts />

  </div>
</template>


<script>
  import axios from 'axios'
  import AddPost from './AddPost'
  import Posts from './Posts'

export default {

  components: {
    AddPost,
    Posts
  },
  data() {
    return {

      posts: null,
    };
  },

  mounted () {
    axios
    .get('http://127.0.0.1:8000/api/posts/',)
    .then(response => (
      this.posts = response.data
    ))
    .catch(e => {
      this.errors.push(e)
    })
  },


}
</script>

<style scoped>
.first-column {
  background-color: #f7f7f7;
  position: relative;
}

.second-column {
  background-color: #fff;
}

.third-column {
  background-color: #f7f7f7;
}

.fourth-column {
  background-color: yellow;
}

.post-content {
  padding: 0px 100px;
  text-align: left;
}
</style>

