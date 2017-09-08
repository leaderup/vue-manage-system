<template>
    <!--<template v-if="ggBreadcrumbLists">-->
        <!---->
    <!--</template>-->
    <div class="crumbs">
        <el-breadcrumb separator="/">
            <template v-for="breadcrumb in ggBreadcrumbLists">
                <el-breadcrumb-item>{{breadcrumb}}</el-breadcrumb-item>
            </template>
        </el-breadcrumb>
    </div>
</template>

<script>
    export default {
        data() {
            return {
//                ggBreadcrumbLists: ["表格", "基础表格"]
            }
        },
        computed: {},
        methods: {},
        props: ['ggBreadcrumbLists'],
        name: "ggBreadcrumbLists"
    }
</script>

<style scoped>

</style>
