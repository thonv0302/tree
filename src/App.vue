<script setup>
import { menus } from './constants/menu.ts'
import { permissions } from './constants/permission.ts'
import { onMounted, ref, nextTick } from 'vue'
const defaultProps = {
  id: "menuId",
  children: 'children',
  label: 'menuName',
}

const convertToTreeStructure = (data) => {
  const map = {}
  const tree = []

  data.forEach((item) => {
    map[item.menuId] = {
      ...item,
      children: []
    }
  })

  data.forEach((item) => {
    if (item.parentId === null) {
      tree.push(map[item.menuId])
    } else {
      if (map[item.parentId]) {
        map[item.parentId].children.push(map[item.menuId])
      }
    }
  })

  return tree
}

const permissionMapList = ref(new Map())
const convertPermissionListToNewMap = (inputData) => {
  let resultMap = new Map();
  inputData.forEach(item => {
    if (!resultMap.has(item.menuId)) {
      resultMap.set(item.menuId, []);
    }
    resultMap.get(item.menuId).push(item);
  });

  return resultMap;
}

const permissionList = ref([])
const getPermissionListByMenuIds = (menuIds) => {
  permissionList.value = [];
  menuIds.forEach(menuId => {
    if (permissionMapList.value.has(menuId)) {
      permissionList.value.push(...permissionMapList.value.get(menuId))
    }
  })
}

const handleNodeClick = async (a, b, c, d) => {
  if (a.children.length > 0) {
    a.children.forEach(child => {
      if (permissionListSelected.value.has(child.menuId)) {
        permissionListSelected.value.delete(child.menuId)
      } else {
        permissionListSelected.value.set(child.menuId, new Set())
      }
    })
  } else {
    if (permissionListSelected.value.has(a.menuId)) {
      permissionListSelected.value.delete(a.menuId)
    } else {
      permissionListSelected.value.set(a.menuId, new Set())
    }
  }
  getPermissionListByMenuIds(b.checkedKeys)
  await nextTick()
  setPermissionSelected();
}

const tableRef = ref()
const setPermissionSelected = () => {
  const permissionSelectedIds = []
  for (const value of permissionListSelected.value.values()) {
    permissionSelectedIds.push(...value)
  }
  findAndActiveRow(permissionSelectedIds)
}

const findAndActiveRow = (permissionSelectedIds) => {
  for (const permissionSelectedId of permissionSelectedIds) {
    const foundIndex = permissionList.value.findIndex(permission => permission.menuPermissionId === permissionSelectedId)
    const permissionFound = permissionList.value[foundIndex];
    tableRef.value.toggleRowSelection(
      permissionFound,
      true,
    )
  }
}

const permissionListSelected = ref(new Map())
const selectRow = async (selection, row) => {
  if (!permissionListSelected.value.has(row.menuId)) {
    permissionListSelected.value.set(row.menuId, new Set([row.menuPermissionId]))
  } else {
    const getMenuPermissionIdSelected = permissionListSelected.value.get(row.menuId);
    if (getMenuPermissionIdSelected.has(row.menuPermissionId)) {
      getMenuPermissionIdSelected.delete(row.menuPermissionId)
    } else {
      getMenuPermissionIdSelected.add(row.menuPermissionId)
    }
  }
  if (row.dependPermissionCode) {
    selectedRowByDepenPermissionCode(row)
  }
  await nextTick()
  setPermissionSelected()
}

const treeRef = ref();
const selectedRowByDepenPermissionCode = async (row) => {
  for (const key in row.dependPermissionCode) {
    if (row.menuId == key && permissionListSelected.value.has(row.menuId) && permissionListSelected.value.get(row.menuId).has(row.menuPermissionId)) {
      for (const dependPermissionId of row.dependPermissionCode[row.menuId]) {
        const getMenuPermissionIdSelected = permissionListSelected.value.get(row.menuId);
        getMenuPermissionIdSelected.add(dependPermissionId)
      }
    } else {
      if (permissionListSelected.value.has(+key)) {
        const getPermissionCodeByMenuId = permissionListSelected.value.get(+key)
        for (const dependPermissionId of row.dependPermissionCode[key]) {
          if (!getPermissionCodeByMenuId.has(dependPermissionId)) {
            getPermissionCodeByMenuId.add(dependPermissionId)
          }
        }
      } else {
        if (!permissionListSelected.value.has(+key)) {
          permissionListSelected.value.set(+key, new Set())
          treeRef.value.setCheckedKeys([...Array.from(permissionListSelected.value.keys())])
          getPermissionListByMenuIds([...Array.from(permissionListSelected.value.keys())])
          for (const dependPermissionId of row.dependPermissionCode[key]) {
            const getMenuPermissionIdSelected = permissionListSelected.value.get(+key);
            getMenuPermissionIdSelected.add(dependPermissionId)
          }
        }
      }
    }
  }
}


const selectAllRow = async (newSelection) => {
  newSelection.forEach(selection => {

    if (!permissionListSelected.value.has(selection.menuId)) {
      permissionListSelected.value.set(selection.menuId, new Set([selection.menuPermissionId]))
    } else {
      const data = permissionListSelected.value.get(selection.menuId)
      permissionListSelected.value.set(selection.menuId, new Set([...data, selection.menuPermissionId]))
    }

    if (selection.dependPermissionCode) {
      console.log({
        selection
      });

      //   permissionListSelected.value.set(+selection.menuId, new Set())
      //   treeRef.value.setCheckedKeys([...Array.from(permissionListSelected.value.keys())])
      //   getPermissionListByMenuIds([...Array.from(permissionListSelected.value.keys())])
    }
  })
  await nextTick()
  setPermissionSelected()
}

onMounted(() => {
  permissionMapList.value = convertPermissionListToNewMap(permissions)
})
</script>

<template>

  <el-row>
    <el-col :span="8">
      <el-tree ref="treeRef" show-checkbox node-key="menuId" default-expand-all style="max-width: 600px"
        :data="convertToTreeStructure(menus)" :props="defaultProps" @check="handleNodeClick" />
    </el-col>
    <el-col :span="16">
      <el-table row-key="menuPermissionId" ref="tableRef" :data="permissionList" style="width: 100%" @select="selectRow"
        @select-all="selectAllRow">
        <el-table-column type="selection" width="55" />
        <el-table-column prop="permissionName" label="Permission" />
        <el-table-column prop="description" label="Description" />
      </el-table>

    </el-col>
  </el-row>
  <pre>{{ permissionListSelected }}</pre>

</template>

<style scoped></style>
