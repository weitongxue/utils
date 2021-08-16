/*
 * @Descripttion: 基础函数
 * @Author: weitongxue
 */
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
function isEmpty(value) {
    return value === null || value === '' || value === undefined;
}
var index = {
    isEmpty: isEmpty,
};
//# sourceMappingURL=index.js.map

/*
 * @Descripttion: 数字函数
 * @Author: weitongxue
 */
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
function ceil(value, pos) {
    if (pos === void 0) { pos = 0; }
    if (isEmpty(value)) {
        return '';
    }
    var swell = Math.pow(10, pos);
    var swellVal = Number(value) * swell;
    var newVal = Math.ceil(swellVal) / swell;
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
function floor(val, pos) {
    if (pos === void 0) { pos = 0; }
    if (isEmpty(val)) {
        return '';
    }
    var swell = Math.pow(10, pos);
    var swellVal = Number(val) * swell;
    return Math.floor(swellVal) / swell;
}
var index$1 = {
    ceil: ceil,
    floor: floor,
};
//# sourceMappingURL=index.js.map

export { index as commonfuns, index$1 as numberFuns };
