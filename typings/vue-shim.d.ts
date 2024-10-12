/*
 * @Author: maoxuena
 * @Date: 2024-10-12 09:58:17
 * @LastEditors: maoxuena
 * @LastEditTime: 2024-10-12 09:58:30
 * @FilePath: \base-ui\typings\vue-shim.d.ts
 * @Description: 
 */
declare module '*.vue'{
    import type { DefineComponent } from "vue";
    const component:DefineComponent<{},{},any>
    export default component
}
