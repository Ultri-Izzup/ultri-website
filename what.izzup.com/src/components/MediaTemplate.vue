<template>
  <div>
    <div v-for="image in data" :key="image.id">
      <q-img :src="image.preview_url"></q-img>
    </div>
    <!--
    <vue-json-pretty :data="data" /> -->
  </div>
</template>

<script setup>
import VueJsonPretty from "vue-json-pretty";
import "vue-json-pretty/lib/styles.css";

const props = defineProps({
  data: Object,
});
</script>
