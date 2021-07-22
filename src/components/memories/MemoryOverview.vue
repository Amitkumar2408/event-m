<template>
  <ion-img :src="image" alt="title">{{ title }}</ion-img>
  <h2 class="ion-text-center">{{ title }}</h2>
  <p class="ion-text-center">{{ description }}</p>
</template>
<script>
import { IonImg } from "@ionic/vue";
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  components: {
    IonImg,
  },
};
</script>
