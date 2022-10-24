import { MenuList } from '@/interface/layout/menu.interface';
import { mock, intercepter } from '../config';

const mockMenuList: MenuList = [
  //1
  // {
  //   code: 'dashboard',
  //   label: {
  //     zh_CN: '业务',
  //     en_US: 'Biểu mẫu báo cáo',
  //   },
  //   icon: 'permission',
  //   path: '/business',
  //   children: [
  //     {
  //       code: 'veryDay1',
  //       label: {
  //         zh_CN: '带查询',
  //         en_US: 'Báo cáo bán hàng hàng ngày',
  //       },
  //       path: '/business/with-search',
  //     },
  //     {
  //       code: 'veryDay2',
  //       label: {
  //         zh_CN: '带查询',
  //         en_US: 'Báo cáo tổng hợp hàng ngày',
  //       },
  //       path: '/business/with-search',
  //     },
  //   ],
  // },

  //2
  // {
  //   code: 'dashboard2',
  //   label: {
  //     zh_CN: '业务',
  //     en_US: 'Quản lý tài chính',
  //   },
  //   icon: 'permission',
  //   path: '/business2',
  //   children: [
  //     {
  //       code: 'code3',
  //       label: {
  //         zh_CN: '带查询',
  //         en_US: 'Lịch sử rút tiền',
  //       },
  //       path: '/business/with-search',
  //     },
  //     {
  //       code: 'code4',
  //       label: {
  //         zh_CN: '带查询',
  //         en_US: 'Lịch sử hoàn tiền',
  //       },
  //       path: '/business/with-search',
  //     },
  //     {
  //       code: 'code5',
  //       label: {
  //         zh_CN: '带查询',
  //         en_US: 'Biểu đồ thu nhập',
  //       },
  //       path: '/business/with-search',
  //     },
  //   ],
  // },
//3
  {
    code: 'wareHouse',
    label: {
      zh_CN: '业务',
      en_US: 'Quản lý kho hàng',
    },
    icon: 'permission',
    path: '/business3',
    children: [
      {
        code: 'code6',
        label: {
          zh_CN: '带查询',
          en_US: 'Quản lý kho hàng',
        },
        path: '/ware-house/',
      },
      {
        code: 'code7',
        label: {
          zh_CN: '带查询',
          en_US: 'Quản lý tồn kho',
        },
        path: 'wareHouse/ware-house-management',
      },
      {
        code: 'code8',
        label: {
          zh_CN: '带查询',
          en_US: 'Điều phối nhập kho',
        },
        path: '/business/with-search',
      },
    ],
  },
];

mock.mock('/user/menu', 'get', intercepter(mockMenuList));
