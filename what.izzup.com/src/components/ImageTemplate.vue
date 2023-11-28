<template>
  <q-card>
    <q-card-section>
      <q-img
        :src="attachment.preview_url"
        spinner-color="white"
        :style="
          'height: ' +
          attachment.meta.small.width +
          'px; width: ' +
          attachment.meta.small.height +
          'px'
        "
      ></q-img>
    </q-card-section>
  </q-card>

  <vue-json-pretty :data="post" />
</template>

<script setup>
import VueJsonPretty from "vue-json-pretty";
import "vue-json-pretty/lib/styles.css";

const props = defineProps({
  img: Object,
});
</script>
