<template>
  <q-page v-show="post.id" padding>
    <div class="q-mb-lg">
      <h1 class="text-cyan-9">{{ post.title }}</h1>
      <code class="text-italic">
        Updated by {{ $store.state.example.username }} from {{ timeAgo(post.updated_at) }}
      </code>
    </div>
    <div v-html="post.body_html" class="q-mt-lg" />
    <div>
      <q-chip v-for="label in post.labels" outline square clickable class="label" :key="label.index"
        :style="`border-color: #${label.color}; color: #${label.color};`" @click="chipClickHandler(label.name)">
        {{ label.name }}
      </q-chip>
    </div>
    <q-separator color="cyan-9" style="height: 1px;" />
    <Comment />
  </q-page>
</template>

<script setup>
import { format } from 'timeago.js';
import { api } from 'boot/axios';
import Comment from '../components/Comment.vue';
import { ref } from 'vue';
import { useQuasar } from 'quasar'
import { useRouter, useRoute } from 'vue-router';
import { useStore } from 'vuex'
const router = useRouter()
const route = useRoute();
const $store = useStore()
const $q = useQuasar()
const post = ref({})

$q.loading.show({ delay: 250 });
getIssue();
function timeAgo(d) {
  return format(d);
};
function getIssue() {
  api.get(`/repos/${$store.state.example.repositorySlug}/issues/${route.params.id}`)
    .then((res) => {
      post.value = res.data
      $q.loading.hide();
    });
};
function chipClickHandler(labelName) {
  router.push(`/?label=${labelName}`);
};
</script>

<style></style>
