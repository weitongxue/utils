/**
 * 向上取整
 * @param {number | string} value 要处理的数字
 * @param {number} [pos = 0] 保留的小数位
 * @return {string} 格式化后的数字
 * @example
 * ``` typescript
 * 1. ceil('1.2345') => '1.23'
 * 2. ceil('1.2345', 3) => '1.235'
 * 3. ceil('1', 3) => '1.000'
 */
export declare function ceil(value: number | string, pos?: number): string | number;
/**
 * 向下取整
 * @param {number | string} value 要处理的数字
 * @param {number} [pos = 0] 保留的小数位
 * @return {string} 格式化后的数字
 * @example
 * ``` typescript
 * 1. floor('1.23') => 1
 * 2. floor('1.234', 2) => 1.23
 * 3. floor('1.230', 3) => 1.230
 */
export declare function floor(val: number | string, pos?: number): string | number;
declare const _default: {
    ceil: typeof ceil;
    floor: typeof floor;
};
export default _default;
