/**
 * 数字计算处理
 * @packageDocumentation
 * @module numberfuns
 */
import { isEmpty } from '../commonfuns/index'; 
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
 export function ceil(value: number | string, pos = 0): string | number {
  if (isEmpty(value)) {
    return '';
  }
  const swell = Math.pow(10, pos);
  const swellVal = Number(value) * swell;
  const newVal = Math.ceil(swellVal) / swell;
  return newVal;
}

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
export function floor(val: number | string, pos = 0): string | number {
  if (isEmpty(val)) {
    return '';
  }
  const swell = Math.pow(10, pos);
  const swellVal = Number(val) * swell;
  return Math.floor(swellVal) / swell;
}

export default {
  ceil,
  floor,
}