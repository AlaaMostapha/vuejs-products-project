<template>
  <div>
    <b-dropdown
      class="m-md-2"
      :right='right'
    >
      <slot name='menu'/>
    </b-dropdown>
  </div>
</template>

<script>
export default {
  name: "DropDown",
  props: {
    menu: {
      type: Array,
    },
    title: {
      type: String,
    },
    right:{
        type: Object,
    }
  },
  created() {
    console.log('dir',this.$props.dir)
  }
};
</script>

<style scoped></style>
