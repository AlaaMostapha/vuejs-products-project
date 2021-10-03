<template>
  <button @click="action">
    {{content}}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: ['action','content'],
};
</script>
