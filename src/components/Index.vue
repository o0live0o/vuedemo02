<template>
<el-container>
  <el-header>
  </el-header>
  <el-container>
    <el-aside width="200px">
      <el-menu 
        router
        default-active="home"
        class="el-menu-vertical-demo"
        text-color="#fff"
        background-color="#545c64">
        <el-menu-item index="home"><i class="el-icon-house"></i>首页</el-menu-item>
        <el-submenu  index="5">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span>系统管理</span>
          </template>
          <el-submenu index="4">
            <template slot="title"><i class="el-icon-user"></i>用户管理</template>
            <el-menu-item index="/user">人员信息</el-menu-item>
            <el-menu-item index="6">权限信息</el-menu-item>
            <el-menu-item index="2">角色信息</el-menu-item>
          </el-submenu>

        </el-submenu>
      </el-menu>
    </el-aside>
    <el-main><router-view></router-view></el-main>
  </el-container>
</el-container>
</template>
<script>
export default {
    data() {
        return {
            msg: 11
        }
    }
}
</script>
<style scoped>
.el-aside {
height:100vh;
}
</style>