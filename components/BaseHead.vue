<script setup lang="ts">
const props = defineProps<{
  title?: string;
  description?: string;
  keywords?: string[];
  img?: string;
  isDefaultIndex?: boolean;
}>()

const SITE_TITLE = ref("Art and Biro");

const indexTitle = ref("Art and Biro");
const indexDescription = ref("It's working wow");

</script>

<template>
  <Head>
    <!-- isDefaultIndex truthy -->
    <Title v-if="isDefaultIndex === true">{{ indexTitle }}</Title>
    <Meta v-if="isDefaultIndex === true" name="title" :content="indexTitle" />
    <Meta v-if="isDefaultIndex === true" name="description" :content="indexDescription" />
    <Meta v-if="isDefaultIndex === true" property="og:title" :content="indexTitle" />
    <Meta v-if="isDefaultIndex === true" property="og:description" :content="indexDescription" />
    <Meta v-if="isDefaultIndex === true" name="twitter:title" :content="indexTitle" />
    <Meta v-if="isDefaultIndex === true" name="twitter:description" :content="indexDescription" />

    <!-- isDefaultIndex falsy -->
    <Title v-else>{{ title }} - {{ SITE_TITLE }}</Title>
    <Meta v-else name="description" :content="description" />
    <Meta v-else name="title" :content="`${title} - ${SITE_TITLE}`" />
    <Meta v-else property="og:title" :content="`${title} - ${SITE_TITLE}`" />
    <Meta v-else property="og:description" :content="description" />
    <Meta v-else name="twitter:title" :content="`${title} - ${SITE_TITLE}`" />
    <Meta v-else name="twitter:description" :content="description" />

    <!-- No change -->
    <Meta v-if="keywords" name="keywords" :content="keywords?.join(', ')" />
    <Meta v-if="img" name="image" :content="img" />
    <Meta property="og:type" content="website" />
    <Meta v-if="img" property="og:image" :content="img" />
    <Meta name="twitter:card" content="summary_large_image" />
    <Meta v-if="img" name="twitter:image" :content="img" />
  </Head>
</template>
