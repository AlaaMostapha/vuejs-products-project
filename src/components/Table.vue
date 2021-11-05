<template>
  <div  style="overflow-x:auto;">
    <table>
      <tr>
        <th v-for="(head, index) in headings" :key="index">
          {{ head }}
        </th>
      </tr>
      <slot name='table-body'/>
      <slot name='table-footer'/>
    </table>
  </div>
</template>

<script>
export default {
  name: "Table",
  props: {
    headings: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  td,
  th {
    border: 1px solid yellow;
    text-align: left;
    padding: 8px;
  }

}
</style>
