import Vue from 'vue';

declare class EmployeeQuery extends Vue {
    name: string
    selected: number
    department: { department: string, departmentId: number }[]
    query(): void
}

// 由于js打包为umd模块，需要增加此行 
export as namespace EmployeeQuery

export = EmployeeQuery