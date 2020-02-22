<template>
    <div class="Another">
        <h2>{{msg}}</h2>
        <b-img src="https://picsum.photos/1024/400/?image=41" fluid alt="Responsive image"></b-img>
    </div>
</template>

<script>
export default {
  name: 'AnotherOne',
  props: {
    msg: String
  }

}
</script>
<style scoped>
a {
  color:blueviolet;
}
</style>