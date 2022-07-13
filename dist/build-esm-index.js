/**
 * 基础处理
 * @packageDocumentation
 * @module commonfuns
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
var index$3 = {
    isEmpty: isEmpty,
};

/**
 * 数字计算处理
 * @packageDocumentation
 * @module numberfuns
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
var index$2 = {
    ceil: ceil,
    floor: floor,
};

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
function isMobilephone(value) {
    var reg = /^1[3-9]\d{9}$/;
    return reg.test(String(value));
}
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
function isTelephone(value) {
    var reg = /^0[1-9][0-9]{1,2}-[2-8][0-9]{6,7}$/;
    return reg.test(String(value));
}
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
function isEmail(value) {
    /* eslint-disable no-useless-escape */
    var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(value);
}
/**
 * 校验 QQ
 * @param {string | number} value 传入的参数
 * @return {boolean} 校验结果 true通过
 * @example
 * ``` typescript
 * 1. isQQ('377162714') => true
 * 2. isQQ('01234567890') => false
 */
function isQQ(value) {
    var reg = /^[1-9][0-9]{4,9}$/gim;
    return reg.test(String(value));
}
/**
 * 校验 是否是外部网址
 * @param {string} path 网址url
 * @return {boolean} 校验结果 true通过
 * @example
 * ``` typescript
 * 1. isExternal('https://www.baidu.com/') => true
 * 2. isExternal('10.25.5.173:15000') => false
 */
function isExternal(path) {
    var reg = /^(https?:|mailto:|tel:)/;
    return reg.test(String(path));
}
/**
 * 校验 二代身份证
 * @param {string|number} value 身份证号码
 * @return {boolean} 校验结果 true通过
 * @example
 * ``` typescript
 * 1. isIDCardNo('440102199402281422') => true
 * 2. isIDCardNo('377162715') => false
 */
function isIDCardNo(value) {
    var reg = /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/;
    return reg.test(String(value));
}
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
function isPicture(fileUrl) {
    var exts = ['jpg', 'jpeg', 'png', 'gif'];
    return exts.some(function (ext) { return fileUrl.toLowerCase().endsWith(".".concat(ext)); });
}
/**
 * 校验 网址URL
 * @param {string} url 网址
 * @return {boolean} 校验结果 true通过
 * @example
 * ``` typescript
 * 1. isURL('https://www.zhihu.com/hot') => true
 * 2. isURL('www.zhihu.com/hot') => false
 */
function isURL(url) {
    var reg = /^((ht|f)tps?):\/\/[\w\-]+(\.[\w\-]+)+([\w\-.,@?^=%&:\/~+#]*[\w\-@?^=%&\/~+#])?$/;
    return reg.test(url);
}
var index$1 = {
    isMobilephone: isMobilephone,
    isTelephone: isTelephone,
    isEmail: isEmail,
    isQQ: isQQ,
    isExternal: isExternal,
    isIDCardNo: isIDCardNo,
    isPicture: isPicture,
    isURL: isURL,
};

/**
 * 字符串处理
 * @packageDocumentation
 * @module stringfuns
 */
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
function phoneFormat(phone, separator, defaultValue) {
    if (separator === void 0) { separator = ' '; }
    if (defaultValue === void 0) { defaultValue = '-'; }
    if (isEmpty(phone))
        return defaultValue;
    if (!isMobilephone(phone))
        return String(phone);
    var val = phone.toString().replace(/[^\d]/g, '');
    var arr = val.split('');
    var str = '';
    arr.forEach(function (v, index) {
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
function bankFormat(value, defaultValue) {
    if (defaultValue === void 0) { defaultValue = '-'; }
    if (isEmpty(value))
        return defaultValue;
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
function phoneEncryption(phone, defaultValue) {
    if (defaultValue === void 0) { defaultValue = '-'; }
    if (isEmpty(phone))
        return defaultValue;
    if (!isMobilephone(phone))
        return String(phone);
    var phoneReg = /(\d{3})\d*(\d{4})/;
    var phoneStr = String(phone).replace(phoneReg, '$1****$2');
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
function emailEncryption(email, defaultValue) {
    if (defaultValue === void 0) { defaultValue = '-'; }
    if (isEmpty(email))
        return defaultValue;
    if (!isEmail(email))
        return email;
    var emailStrList = email.split('@');
    var emailStr = "".concat(emailStrList[0].substr(0, emailStrList[0].length - 2), "*****").concat(emailStrList[1].substr(2));
    return emailStr;
}
var index = {
    phoneFormat: phoneFormat,
    bankFormat: bankFormat,
    phoneEncryption: phoneEncryption,
    emailEncryption: emailEncryption,
};

export { index$3 as commonfuns, index$2 as numberFuns, index as stringfuns, index$1 as validatefuns };
