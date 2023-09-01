<template>
  <q-page class="flex flex-center">
    <div
      class="row text-h2 text-bold full-width text-center justify-center text-primary"
    >
      Vue advocacy and learning resources
    </div>
    <div class="row flex">
      <div :class="Screen.lt.md ? 'col-12  q-px-sm' : 'col-4  q-pl-xl q-pr-lg'">
        <q-card class="fit q-pa-lg">
          <q-card-section class="text-h4 text-bold text-primary">
            Submit you project proposal for a chance to win free application
            development.
          </q-card-section>
        </q-card>
      </div>
      <div :class="Screen.lt.md ? 'col-12 q-px-sm' : 'col-8 q-pl-lg q-pr-xl'">
        <q-card class="fit q-pa-lg">
          <q-card-section class="text-h4 text-bold text-primary">
            <div class="text-h3 text-primary">Requirements:</div>
            <ul>
              <li>Open Source</li>
              <li>Vue based</li>
              <li>Provide social good</li>
              <li>Build in public</li>
            </ul>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row full-width  q-pa-xl">
      <q-card class="fit q-pa-lg">
        <q-card-section>
          <div dic class="text-h5">To enter:</div>
          <div>
            Send an email to
            <a href="mailto:freeapp@ultri.com">freeapp@ultri.com</a>
          </div>
        </q-card-section>
      </q-card>
    </div>
    <div class="row full-width  q-px-xl">
      <q-card class="fit q-pa-lg">
        <q-card-section>
          <div dic class="text-h5">Judging process:</div>
          <div>
            TBD
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { Screen } from "quasar";
</script>
