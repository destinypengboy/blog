<template>
  <div>
    <q-list v-for="comment in comments" bordered class="rounded-borders q-mt-lg" :key="comment.index">
      <q-item class="q-pa-md">
        <q-item-section avatar>
          <q-avatar rounded>
            <img alt="avatar" :src="comment.user.avatar_url" />
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label lines="1">
            <span class="text-weight-bold">{{ comment.user.login }}</span>  
            <span class="text-gray-light"> {{ timeAgo(comment.updated_at) }}</span>
          </q-item-label>
          <q-item-label v-html="comment.body_html" class="q-pt-sm"></q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
    <div class="flex flex-center q-mt-xl">
      <q-btn outline no-caps color="cyan-9" @click.native="goAddComment">
        <q-icon left size="2rem" name="add_comment" />
        <div>Add Comment</div>
      </q-btn>
    </div>
  </div>
</template>

<script setup>
import { openURL } from 'quasar';
import { format } from 'timeago.js';
import { api } from 'boot/axios';
import { ref,onMounted } from 'vue';
import { useQuasar } from 'quasar'
import { useRouter, useRoute } from 'vue-router';
import { useStore } from 'vuex'
const router = useRouter()
const route = useRoute();
const $store = useStore()
const $q = useQuasar()
const comments = ref([]);
const addCommentUrl = ref(`https://github.com/${$store.state.example.repositorySlug}/issues/${route.params.id}/#new_comment_field`)

function timeAgo(d) {
  return format(d);
};
function getComments() {
  api.get(`/repos/${$store.state.example.repositorySlug}/issues/${route.params.id}/comments`)
    .then((res) => {
      comments.value = res.data;
    });
};
function goAddComment() {
  openURL(addCommentUrl.value);
};
onMounted(() => {
  getComments();
})
</script>

<style scoped>
.q-item__section--side>.q-avatar {
  font-size: 48px;
}

@media (max-width: 767px) {
  .q-item__section--side>.q-avatar {
    font-size: 36px;
  }
}
</style>
