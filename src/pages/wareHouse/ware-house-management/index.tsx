import { Space, Tag } from "antd";
import { getWareHouseList } from "@/api/warehouse";

import MyButton from "@/components/basic/button";
import MyPage, { MyPageTableOptions } from "@/components/business/page";
import { WareHouse } from "@/interface/warehouse";
import { FC } from "react";

const { Item: SearchItem } = MyPage.MySearch;

const tableColums: MyPageTableOptions<WareHouse> = [
  {
    title: "id",
    dataIndex: "id",
    key: "id",
  },
  { title: "Tên kho hàng", dataIndex: "name", key: "name" },
  { title: "Chi nhánh", dataIndex: "address", key: "address" },
  { title: "Người liên lạc", dataIndex: "linkman", key: "linkman" },
  { title: "Số điện thoại", dataIndex: "phone", key: "phone" },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <MyButton type="text">Invite {record.name}</MyButton>
        <MyButton type="text">Delete</MyButton>
      </Space>
    ),
  },
];

const WareHouseWithSearchPage: FC = () => {
  return (
    // <MyPage
    //   pageApi={[]}
    //   searchRender={
    //     <>
    //       <SearchItem label="Tra Cứu" name="research" type="input" />
    //       <SearchItem label="Thêm Mới" name="insert" type="input" />
    //     </>
    //   }
    //   tableOptions={tableColums}
    // ></MyPage>
    <></>
  );
};

export default WareHouseWithSearchPage;
