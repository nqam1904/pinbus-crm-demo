import { request } from './request';
import { PageData } from '@/interface';
import { WareHouse } from '@/interface/warehouse';

export const getWareHouseList = (params: any) => request<PageData<WareHouse>>('get', '/warehouse/list', params);
