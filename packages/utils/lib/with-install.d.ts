import type { Plugin, Component } from 'vue';
export type SFCWithInstall<T extends Component> = T & Plugin;
export declare const withInstall: <T extends Component<any, any, any, import("@vue/runtime-core").ComputedOptions, import("@vue/runtime-core").MethodOptions, {}, any>>(comp: T) => SFCWithInstall<T>;
