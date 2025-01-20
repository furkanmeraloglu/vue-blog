<template>
  <div class="about">
    <h1>This is author detail page</h1>
    <p>Author ID: {{ authorId }}</p>
    <p>Author Name: {{ authorName }}</p>
    <p>Author Surname: {{ authorSurname }}</p>
  </div>
</template>
<script setup lang="ts">
  const props = defineProps<{ slug: string }>()
  const getAuthorIdFromSlug = (slug: string) => {
    return slug.split('_').pop()
  }
  const getAuthorNameFromSlug = (slug: string) => {
    return slug.split('_').shift()
  }
  const getAuthorSurnameFromSlug = (slug: string) => {
    return slug.split('_').slice(1, -1).join(' ')
  }
  const authorId = getAuthorIdFromSlug(props.slug);
  const authorName = getAuthorNameFromSlug(props.slug);
  const authorSurname = getAuthorSurnameFromSlug(props.slug);
</script>
