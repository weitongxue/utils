/**
 * 判断value是否为空值
 * @param {string} value 传入的参数
 * @return {boolean} true 为空值
 * @example
 * ``` typescript
 * 1. isEmpty('') => true
 * 2. isEmpty(null) => true
 * 3. isEmpty(undefined) => true
 * 4. isEmpty(12323) => false
 */
export declare function isEmpty(value: string | number): boolean;
declare const _default: {
    isEmpty: typeof isEmpty;
};
export default _default;
