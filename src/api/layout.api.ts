import { MenuList } from '../interface/layout/menu.interface';
import { Notice } from '@/interface/layout/notice.interface';
import { AxiosRequestConfig } from 'axios';
import axiosClient from './axiosClient';

/** 获取菜单列表接口 */
/** Provides the mock menu list to be shown in the navigation sidebar */
// export const getMenuList = (config: AxiosRequestConfig = {}) => request<MenuList>('get', '/user/menu', {}, config);

/** 获取通知列表接口 */
/** Provides the mock notification list to be shown
 * in the notification dropdown
 */
// export const getNoticeList = (config: AxiosRequestConfig = {}) => request<Notice[]>('get', '/user/notice', {}, config);
const LayoutApi = {

    getMenuList(){
        const url = '/user/menu'
        return axiosClient.get(url)
    },

    getNoticeList(){
        const url = '/user/notice'
        return axiosClient.get(url)
    }
}

export default LayoutApi