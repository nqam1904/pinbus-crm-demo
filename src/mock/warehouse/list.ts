import { WareHouse } from '@/interface/warehouse';
import { mock, intercepter } from '../config';
import qs from 'query-string';

const data: WareHouse[] = [
  {
    id: 1,
    name: 'Pinbus',
    orgType: '04401',
    address: 'Hồ Chí Minh',
    phone: '0916666660',
    linkman: 'Võ Anh Tuấn',
    lastModifiedDate: '2020-11-25 10:40:32',
    lastModifiedBy: 1,
  },
  {
    id: 2,
    name: 'Pinbus 2',
    orgType: '04402',
    address: 'Hồ Chí Minh',
    phone: '0916666660',
    linkman: 'Võ Anh Tuấn 2',
    lastModifiedDate: '2020-11-25 10:40:32',
    lastModifiedBy: 1,
  },
  {
    id: 3,
    name: 'Pinbus 3',
    orgType: '04403',
    address: 'Hồ Chí Minh',
    phone: '0916666660',
    linkman: 'Võ Anh Tuấn 3',
    lastModifiedDate: '2020-11-25 10:40:32',
    lastModifiedBy: 1,
  },
];

// new Array(30).fill(undefined).forEach((item, index) => {
//   data.push({
//     id: index + 4,
//     name: 'Joe' + index,
//     address: 'Test' + index,
//     tags: ['cool', 'teacher'],
//   });
// });

mock.mock(/\/warehouse\/list*/, 'get', (config: any) => {
  const jsonParams = config.url.split('?')[1];
  const params = qs.parse(jsonParams);

  return intercepter(data, params);
});
