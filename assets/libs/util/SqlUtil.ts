import { EncryptUtil } from "./EncryptUtil";
import { md5 } from "./Md5";


export module SqlUtil {

    let _key: string | null = null;
    let _iv: string | null = null;

    export function init(key: string, iv: string) {
        _key = md5(key);
        _iv = md5(iv);
    }

    export function set(key: string, value: any) {
        if (null == key) {
            console.error("存储的key不能为空");
            return;
        }
        if (!CC_PREVIEW) {
            key = md5(key);
        }
        if (null == value) {
            console.warn("存储的值为空，则直接移除该存储");
            remove(key);
            return;
        }
        if (typeof value === 'function') {
            console.error("储存的值不能为方法");
            return;
        }
        if (typeof value === 'object') {
            try {
                value = JSON.stringify(value);
            } catch (e) {
                console.error(`解析失败，str=${value}`);
                return;
            }
        } else if (typeof value === 'number') {
            value = value + "";
        }
        if (!CC_PREVIEW || null == _key || _iv == null) {
            try {
                value = EncryptUtil.aesEncrypt(value, _key, _iv);
            } catch (e) {
                value = null;
            }

        }
        cc.sys.localStorage.setItem(key, value);
    }

    export function get(key: string, defaultValue?: any) {
        if (null == key) {
            console.error("存储的key不能为空");
            return;
        }
        if (!CC_PREVIEW) {
            key = md5(key);
        }
        let str: string | null = cc.sys.localStorage.getItem(key);
        if (null != str && '' !== str && !CC_PREVIEW && null != _key && null != _iv) {
            try {
                str = EncryptUtil.aesDecrypt(str, _key, _iv);
            } catch (e) {
                str = null;
            }

        }
        if (null == defaultValue || typeof defaultValue === 'string') {
            return str;
        }
        if (null === str) {
            return defaultValue;
        }
        if (typeof defaultValue === 'number') {
            return Number(str) || 0;
        }
        if (typeof defaultValue === 'boolean') {
            return "true" == str; // 不要使用Boolean("false");
        }
        if (typeof defaultValue === 'object') {
            try {
                return JSON.parse(str);
            } catch (e) {
                console.error("解析数据失败,str=" + str);
                return defaultValue;
            }

        }
        return str;
    }


    export function remove(key: string) {
        if (null == key) {
            console.error("存储的key不能为空");
            return;
        }
        if (!CC_PREVIEW) {
            key = md5(key);
        }
        cc.sys.localStorage.removeItem(key);
    }

    export function clear() {
        cc.sys.localStorage.clear();
    }
}