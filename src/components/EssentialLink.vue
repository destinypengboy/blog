<template>
  <q-item
    clickable
    tag="a"
    target="_blank"
    :href="props.link"
  >
    <q-item-section
      v-if="props.icon"
      avatar
      class="text-grey-10"
    >
      <q-icon :name="icon" color="cyan-9"/>
    </q-item-section>

    <q-item-section>
      <q-item-label class="text-cyan-9">{{ props.title }}</q-item-label>
      <q-item-label caption style="text-decoration: underline;">{{ props.caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
const props = defineProps(['title','caption','link','icon'])
</script>

<style scoped>
.q-item__label + .q-item__label {
	 white-space: nowrap;
	 text-overflow: ellipsis;
	 overflow: hidden;
}
 .markdown-body a:hover {
	 text-decoration: none;
}
 </style>