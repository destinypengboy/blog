<template>
  <div>
    <div v-for="post in postList" :key="post.id">
      <q-item clickable v-ripple class="q-mt-lg">
        <q-item-section @click="toPostDetail(post.number)">
          <q-item-label>
            <div class="text-h6 text-cyan-9">{{ post.title }}</div>
            <q-item-label class="text-gray-light text-weight-thin q-mt-sm q-mb-sm">
              {{ dateFormate(post.created_at) }}
            </q-item-label>
          </q-item-label>
          <q-item-label lines="4" class="text-body1 text-gray-light text-justify">
            {{ htmlToText(post.body_html) }}
          </q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-chip v-for="label in post.labels" outline square clickable class="label" :key="label.index"
            :style="`border-color: #${label.color}; color: #${label.color};`" @click="chipClickHandler(label.name)">
            {{ label.name }}
          </q-chip>
        </q-item-section>
      </q-item>
      <q-separator spaced inset />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { date } from 'quasar';
import { useRouter, useRoute } from 'vue-router';
const props = defineProps(['postList']);
const router = useRouter()
const route = useRoute();

function dateFormate(d) {
  return date.formatDate(d, 'YYYY-MM-DD HH:mm:ss');
};
function htmlToText(h) {
  return h.replace(/<\/?.+?>/g, '');
};
function toPostDetail(id) {
  router.push(`/posts/${id}`);
};
function chipClickHandler(labelName) {
  router.push(`/?label=${labelName}`);
};
</script>

<style scoped>
.label:hover {
  box-shadow: 4px 4px 2px #888;
}

.markdown-body hr {
  height: unset;
}

@media (max-width: 767px) {

  .label,
  .created-at {
    display: none;
  }
}
</style>
