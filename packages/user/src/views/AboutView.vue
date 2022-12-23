<template>
  <div class="about">
    <h1>Date from server: {{ data.message }}</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
<script lang="ts" setup>
import {getApiData} from "@project/shared/src/util/api"
import { ref, onBeforeMount } from "vue";
const data = ref<any>({})
onBeforeMount(async () => data.value = await getApiData())

</script>
