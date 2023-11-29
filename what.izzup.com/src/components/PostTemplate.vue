<template>
  <q-card :class="Screen.lt.md ? ' q-px-none ' : ' q-px.md '">
    <q-card-section>
      <account-template :data="data.account"></account-template>
    </q-card-section>
    <q-card-section>
      <div v-html="data.content" class="q-px-lg text-body1"></div>
    </q-card-section>

    <q-card-section
      v-if="data.media_attachments && data.media_attachments.length > 0"
    >
      <media-template :data="data.media_attachments"></media-template>
    </q-card-section>
    <q-card-actions class="row justify-center">
      <q-btn label="visit" size="sm" :href="data.uri" flat></q-btn>
    </q-card-actions>
  </q-card>
</template>

<script setup>
import { Screen } from "quasar";
import VueJsonPretty from "vue-json-pretty";
import "vue-json-pretty/lib/styles.css";

import AccountTemplate from "../components/AccountTemplate.vue";
import MediaTemplate from "../components/MediaTemplate.vue";

const props = defineProps({
  data: Object,
});
</script>
