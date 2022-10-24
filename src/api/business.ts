import { request } from './axiosClient';
import { PageData } from '@/interface';
import { BuniesssUser } from '@/interface/business';

export const getBusinessUserList = (params: any) => request<PageData<BuniesssUser>>('get', '/business/list', params);
