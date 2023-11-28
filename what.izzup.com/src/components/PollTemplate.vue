<template>
  <div>
    POLL
    <vue-json-pretty :data="data" />
  </div>
</template>

<script setup>
import VueJsonPretty from "vue-json-pretty";
import "vue-json-pretty/lib/styles.css";

const props = defineProps({
  data: Object,
});
</script>
