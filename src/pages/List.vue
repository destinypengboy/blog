<template>
  <q-page v-if="postList.length !== 0" padding>
    <q-list padding class="rounded-borders" style="margin-top: -24px;">
      <Item :postList="postList" />
    </q-list>
  </q-page>
</template>

<script setup>
import { api } from 'boot/axios';
import Item from '../components/Item.vue';
import { ref,watch,onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useStore } from 'vuex'
import { useQuasar } from 'quasar'
const postList = ref([]);
const $store = useStore()
const router = useRouter()
const route = useRoute();
const $q = useQuasar()



onMounted(() => {
  getIssueList();
})

watch(
  () => router.currentRoute.value.path,(toPath) => {
    getIssueList();
  },{immediate: true,deep: true}
)

function getIssueList() {
  console.log($store.state.example.repositorySlug);
  $q.loading.show({ delay: 250 });
  let url = `/search/issues?q=+repo:${$store.state.example.repositorySlug}+state:open`;
  if (route.query.label) {
    url += `+label:${route.query.label}`;
  }
  api.get(url)
    .then((res) => {
      postList.value = res.data.items;
      $q.loading.hide();
    });
};
</script>

<style></style>
