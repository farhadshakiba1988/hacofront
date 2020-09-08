import React from "react";
import {message, Upload } from "antd";
const Dragger = Upload.Dragger;

const props = {
  name: 'file',
  multiple: true,
  action: '//jsonplaceholder.typicode.com/posts/',
  onChange(info) {
    const status = info.file.status;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} رزومه با موفقیت بارگذاری شد`);
    } else if (status === 'error') {
      message.error(`${info.file.name} آپلود رزومه انجام نشد`);
    }
  },
};

const DragDrop = () => {
  return (
    <div class="" title="رها کردن">
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          {/* <Icon type="inbox" /> */}
          <img alt="" className="" src={require("./../../../Icons/images/220c2335-ff26-490d-9248-affcc9b94f69.svg")} />
        </p>
        <p className="ant-upload-text">رزومه های متقاضیان را در اینجا بکشید و رها کنید</p>
        <p className="ant-upload-hint">پشتیبانی از بارگذاری مجدد یا فله. ممنوعیت بارگذاری اطلاعات شرکت یا سایر پرونده های باند را به شدت منع کنید</p>
      </Dragger>
    </div>
  );
};
export default DragDrop;
