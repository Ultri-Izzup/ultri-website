<template>
  <q-page class="flex">
    <q-card class="relative-position card-example" flat bordered>
      <q-card-section class="q-pb-none">
        <div class="text-h6">Lorem Ipsum</div>
      </q-card-section>

      <q-card-section>
        <transition
          appear
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
        >
          <div v-show="showSimulatedReturnData">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            vel magna eu risus laoreet tristique. Nulla ut fermentum elit, nec
            consequat augue. Morbi et dolor nec metus tincidunt pellentesque.
            Nullam non semper ante. Fusce pellentesque sagittis felis quis
            porta. Aenean condimentum neque sed erat suscipit malesuada. Nulla
            eget rhoncus enim. Duis dictum interdum eros.
          </div>
        </transition>
      </q-card-section>

      <q-inner-loading :showing="true">
        <q-spinner-grid size="50px" color="primary"></q-spinner-grid>
      </q-inner-loading>
    </q-card>
  </q-page>
</template>

<script setup></script>
