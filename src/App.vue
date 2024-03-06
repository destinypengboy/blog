<template>
  <div class="markdown-body">
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import 'github-markdown-css/github-markdown-light.css';

export default defineComponent({
  name: 'App'
})
</script>

<style scoped>
.markdown-body {
	 box-sizing: border-box;
	 min-width: 200px;
	 max-width: 980px;
	 margin: 0 auto;
}
 @media (max-width: 767px) {
	 .markdown-body {
		 padding: 15px;
	}
}
 
</style>
