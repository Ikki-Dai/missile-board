<template>
    <el-col :span="8">
        <el-input placeholder="内容" v-model="input">
            <el-select slot="prepend" placeholder="范围" v-model="selection">
                <el-option label="User Story" value="1"></el-option>
                <el-option label="Tasks" value="2"></el-option>
                <el-option label="Test Case" value="3"></el-option>
            </el-select>
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
    </el-col>
</template>

<script>
export default {
    name:"Search",
    data(){
        return {
            input: "",
            selection: ""
        }
    }
}
</script>