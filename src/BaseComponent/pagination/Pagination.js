import React from "react";
import { Card, Pagination } from "antd";

const Paginations = () => {
  function showTotal(total) {
    return `کل ${total} موارد`;
  }
  return (
    <Card className="gx-card" title="صفحه بندی با حداقل صفحات">
      <Pagination size="small" total={50} />   
    </Card>
  );
};

export default Paginations;
