/**
 * 字符串处理
 * @packageDocumentation
 * @module stringfuns
 */
 import { isEmpty } from '../commonfuns/index'; 
 import { isMobilephone, isEmail } from '../validatefuns/index'
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
 export function phoneFormat(
  phone: string | number,
  separator: string = ' ',
  defaultValue: string = '-'
): string {
  if (isEmpty(phone)) return defaultValue;
  if (!isMobilephone(phone)) return String(phone);
  const val = phone.toString().replace(/[^\d]/g, '');
  const arr = val.split('');
  let str = '';
  arr.forEach((v, index) => {
    if (index === 3 || index === 7) {
      str += separator;
    }
    str += v;
  });
  return str;
}

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
export function bankFormat(
  value: string | number,
  defaultValue: string = '-'
): string {
  if (isEmpty(value)) return defaultValue;
  return value
    .toString()
    .replace(/\s/g, '')
    .replace(/(.{4})/g, '$1 ');
}

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
export function phoneEncryption(
  phone: string | number,
  defaultValue: string = '-'
): string {
  if (isEmpty(phone)) return defaultValue;
  if (!isMobilephone(phone)) return String(phone);
  const phoneReg = /(\d{3})\d*(\d{4})/;
  const phoneStr = String(phone).replace(phoneReg, '$1****$2');
  return phoneStr;
}

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
export function emailEncryption(
  email: string,
  defaultValue: string = '-'
): string {
  if (isEmpty(email)) return defaultValue;
  if (!isEmail(email)) return email;
  const emailStrList = email.split('@');
  const emailStr = `${emailStrList[0].substr(
    0,
    emailStrList[0].length - 2
  )}*****${emailStrList[1].substr(2)}`;
  return emailStr;
}

export default {
  phoneFormat,
  bankFormat,
  phoneEncryption,
  emailEncryption,
}