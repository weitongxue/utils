/**
 * 格式化手机号码
 * @param {string | number} phone 传入的手机号码
 * @param {string} [separator = ' '] 连接符
 * @param {string} [defaultValue = '-'] 默认返回值
 * @return {string} 格式化后的手机号码
 * @example
 * ``` typescript
 * 1. phoneFormat('') => '-'
 * 2. phoneFormat('10086') => '10086'
 * 3. phoneFormat('13427540588') => '134 2754 0588'
 * 4. phoneFormat('13427540588') => '134-2754-0588'
 */
export declare function phoneFormat(phone: string | number, separator?: string, defaultValue?: string): string;
/**
 * 格式化银行卡
 * @param {string | number} phone 传入的银行卡号
 * @param {string} [defaultValue = '-'] 默认返回值
 * @return {string} 格式化后的银行卡号
 * @example
 * ``` typescript
 * 1. bankFormat('') => '-'
 * 2. bankFormat('6282356862823568123') => '6282 3568 6282 3568 123'
 */
export declare function bankFormat(value: string | number, defaultValue?: string): string;
/**
 * 手机号加密
 * @param {string | number} phone 传入的手机号码
 * @param {string} [separator = ' '] 连接符
 * @param {string} [defaultValue = '-'] 默认返回值
 * @return {string} 加密后的手机号码
 * @example
 * ``` typescript
 * 1. phoneEncryption('') => '-'
 * 2. phoneEncryption(13475481) => '13475481'
 * 3. phoneEncryption(13427540581) => '134****0581'
 */
export declare function phoneEncryption(phone: string | number, defaultValue?: string): string;
/**
 * 邮箱加密
 * @param {string | number} email 传入的邮箱
 * @param {string} [defaultValue = '-'] 默认返回值
 * @return {string} 加密后的邮箱
 * @example
 * ``` typescript
 * 1. emailEncryption('') => '-'
 * 2. emailEncryption('www.vau.com') => 'www.vau.com'
 * 3. emailEncryption('377162714@qq.com') => '3771627*****.com'
 */
export declare function emailEncryption(email: string, defaultValue?: string): string;
declare const _default: {
    phoneFormat: typeof phoneFormat;
    bankFormat: typeof bankFormat;
    phoneEncryption: typeof phoneEncryption;
    emailEncryption: typeof emailEncryption;
};
export default _default;
