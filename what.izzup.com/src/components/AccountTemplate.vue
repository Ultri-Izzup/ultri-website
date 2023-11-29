<template>
  <div>
    <div class="row flex items-end">
      <q-avatar>
        <img :src="data.avatar" />
      </q-avatar>
      <div :class="Screen.lt.md ? ' q-pl-sm ' : ' q-pl-md'">
        <div class="text-weight-bold text-body1">
          {{ data.display_name }}
        </div>
        <div>
          <a :href="data.url">@{{ data.username }}@{{ getDomain(data.url) }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Screen } from "quasar";
import VueJsonPretty from "vue-json-pretty";
import "vue-json-pretty/lib/styles.css";

const props = defineProps({
  data: Object,
});

const getDomain = (url) => {
  let link = new URL(url);
  return link.hostname;
};
</script>
