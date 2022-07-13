/**
 * 校验信息相关
 * @packageDocumentation
 * @module validatefuns
 */
/**
 *校验 手机号码(2021年)
  规则: 以1为开头,第二个数[3-9],总共11位数
 * @param {string | number} value 传入的号码
 * @returns {boolean} 校验结果 true通过
 * @example
 * ```typescript
 * 1. isMobilephone('') => false
 * 2. isMobilephone('13427540588') => true
 * 3. isMobilephone('10086') => false
 */
export declare function isMobilephone(value: string | number): boolean;
/**
 *校验 座机号码
 *规则: 必须带区号
 * @param {string | number} value 传入的号码
 * @returns {boolean} 校验结果 true通过
 * @example
 * ```typescript
 * 1. isTelephone('') => false
 * 2. isTelephone('020-81721643') => true
 * 3. isTelephone('10086') => false
 */
export declare function isTelephone(value: string | number): boolean;
/**
 * 校验 邮箱
 * @param {string} value 传入的参数
 * @return {boolean} 校验结果 true通过
 * @example
 * ``` typescript
 * 1. isEmail('') => false
 * 2. isEmail('377162714@qq.com') => true
 * 3. isEmail('outlook.com') => false
 */
export declare function isEmail(value: string): boolean;
/**
 * 校验 QQ
 * @param {string | number} value 传入的参数
 * @return {boolean} 校验结果 true通过
 * @example
 * ``` typescript
 * 1. isQQ('377162714') => true
 * 2. isQQ('01234567890') => false
 */
export declare function isQQ(value: string | number): boolean;
/**
 * 校验 是否是外部网址
 * @param {string} path 网址url
 * @return {boolean} 校验结果 true通过
 * @example
 * ``` typescript
 * 1. isExternal('https://www.baidu.com/') => true
 * 2. isExternal('10.25.5.173:15000') => false
 */
export declare function isExternal(path: string): boolean;
/**
 * 校验 二代身份证
 * @param {string|number} value 身份证号码
 * @return {boolean} 校验结果 true通过
 * @example
 * ``` typescript
 * 1. isIDCardNo('440102199402281422') => true
 * 2. isIDCardNo('377162715') => false
 */
export declare function isIDCardNo(value: string | number): boolean;
/**
 * 判断是否是图片类型
 * @param {string} fileUrl 传入的文件全称
 * @return {boolean} true 为空值
 * @example
 * ``` typescript
 * 1. isPicture('test.jpg') => true
 * 2. isPicture('test.png') => true
 * 3. isPicture('test.txt') => false
 */
export declare function isPicture(fileUrl: string): boolean;
/**
 * 校验 网址URL
 * @param {string} url 网址
 * @return {boolean} 校验结果 true通过
 * @example
 * ``` typescript
 * 1. isURL('https://www.zhihu.com/hot') => true
 * 2. isURL('www.zhihu.com/hot') => false
 */
export declare function isURL(url: string): boolean;
declare const _default: {
    isMobilephone: typeof isMobilephone;
    isTelephone: typeof isTelephone;
    isEmail: typeof isEmail;
    isQQ: typeof isQQ;
    isExternal: typeof isExternal;
    isIDCardNo: typeof isIDCardNo;
    isPicture: typeof isPicture;
    isURL: typeof isURL;
};
export default _default;
