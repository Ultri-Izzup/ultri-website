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
    <!--
    <q-card-section v-if="data.mentions && data.mentions.length > 0">
      <mentions-template :data="data.mentions"></mentions-template>
    </q-card-section>

    <q-card-section v-if="data.tags && data.tags.length > 0">
      <tags-template :data="data.tags"></tags-template>
    </q-card-section>

    <q-card-section v-if="data.emojis && data.emojis.length > 0">
      <emojis-template :data="data.emojis"></emojis-template>
    </q-card-section>

    <q-card-section v-if="data.card">
      <card-template :data="data.card"></card-template>
    </q-card-section>

    <q-card-section v-if="data.poll">
      <poll-template :data="data.poll"></poll-template>
    </q-card-section> -->
  </q-card>
</template>

<script setup>
import { Screen } from "quasar";
import VueJsonPretty from "vue-json-pretty";
import "vue-json-pretty/lib/styles.css";

import AccountTemplate from "../components/AccountTemplate.vue";
import MediaTemplate from "../components/MediaTemplate.vue";
import EmojisTemplate from "../components/EmojisTemplate.vue";
import CardTemplate from "../components/CardTemplate.vue";
import TagsTemplate from "../components/TagsTemplate.vue";
import PollTemplate from "../components/PollTemplate.vue";

const props = defineProps({
  data: Object,
});
</script>
