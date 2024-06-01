<script setup lang="ts">
import type { Ref } from "vue";
import { computed, ref } from "vue";
</script>

<template>
  <div class="lg:container mx-5 sm:mx-5 md:mx-5 lg:mx-5 xl:mx-auto 2xl:mx-auto">
    <div class="sm:flex md:flex my-4">
      <span
        class="mulish-bold sm:text-2xl md:text-3xl lg:text-5xl text-white font-semibold"
        >Cabal Cronos</span
      >
    </div>

    <LazyFormCreateAccount></LazyFormCreateAccount>
    <UNotifications
      :ui="{
        position: 'top-0 bottom-auto',
      }"
    />
  </div>
</template>
