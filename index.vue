<template>
  <a-tree
    v-model:expandedKeys="expandedKeys"
    v-model:selectedKeys="selectedKeys"
    v-model:checkedKeys="checkedKeys"
    checkable
    :tree-data="treeData"
    :field-names="fieldNames"
  >
    <template #title="{ name, key }">
      <span v-if="key === '0-0-1'" style="color: #1890ff">{{ name }}</span>
      <template v-else>{{ name }}</template>
    </template>
  </a-tree>
</template>
<script>
import { defineComponent, ref, watch } from 'vue';
export default defineComponent({
  setup() {
    const expandedKeys = ref(['0-0-0', '0-0-1']);
    const selectedKeys = ref(['0-0-0', '0-0-1']);
    const checkedKeys = ref(['0-0-0', '0-0-1']);
    const fieldNames = {
      children: 'child',
      title: 'name',
    };
    const treeData = [{
      name: 'parent 1',
      key: '0-0',
      child: [{
        name: '张晨成',
        key: '0-0-0',
        disabled: true,
        child: [{
          name: 'leaf',
          key: '0-0-0-0',
          disableCheckbox: true,
        }, {
          name: 'leaf',
          key: '0-0-0-1',
        }],
      }, {
        name: 'parent 1-1',
        key: '0-0-1',
        child: [{
          key: '0-0-1-0',
          name: 'zcvc',
        }],
      }],
    }];
    watch(expandedKeys, () => {
      console.log('expandedKeys', expandedKeys);
    });
    watch(selectedKeys, () => {
      console.log('selectedKeys', selectedKeys);
    });
    watch(checkedKeys, () => {
      console.log('checkedKeys', checkedKeys);
    });
    return {
      expandedKeys,
      selectedKeys,
      checkedKeys,
      fieldNames,
      treeData: ref(treeData),
    };
  },

});
</script>