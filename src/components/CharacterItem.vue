<script setup lang="ts">
import { ref, watchEffect } from 'vue';

const props = defineProps<{
  imgUrl: string,
  imgAlt: string
}>()

const fileType: any = props.imgUrl.match(/\.[0-9a-z]+$/i)
const cleanPath = props.imgUrl.replace(fileType,'')
const pathArray = cleanPath.split('/')
const folderPath = pathArray[pathArray.length - 2]
const imagePath = pathArray[pathArray.length - 1]

const image = ref()

watchEffect(async () => {
  switch (fileType[0]) {
    case '.jpg':
      image.value = (await import(/* @vite-ignore */ `../assets/images/${folderPath}/${imagePath}.jpg`)).default
      break;
    // case '.jpeg':
    //   image.value = (await import(/* @vite-ignore */ `../assets/images/${folderPath}/${imagePath}.jpeg`)).default
    //   break;
    case '.png':
      image.value = (await import(/* @vite-ignore */ `../assets/images/${folderPath}/${imagePath}.png`)).default
      break;
    // case '.svg':
    //   image.value = (await import(/* @vite-ignore */ `../assets/images/${folderPath}/${imagePath}.svg`)).default
    //   break;
    default:
      console.log(`Sorry, the image component can't recognize the ${fileType} file type just yet stupid`);
  }
})
</script>

<template>
  <div>
    <img :src="imgUrl" :alt="imgAlt">
  </div>
</template>

