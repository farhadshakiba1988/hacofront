import React from "react";
import { Button, Card, Icon, Upload } from "antd";
import "./UploadFile.css";
class UploadFile extends React.Component {
  handleChange = (info) => {
    let fileList = info.fileList;
    // 1. Limit the number of uploaded files
    //    Only to show two recent uploaded files, and old ones will be replaced by the new
    fileList = fileList.slice(-2);
    // 2. read from response and show file link
    fileList = fileList.map((file) => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
      }
      return file;
    });
    // 3. filter successfully uploaded files according to response from server
    fileList = fileList.filter((file) => {
      if (file.response) {
        return file.response.status === 'success';
      }
      return true;
    });
  };
  render() {
    const props = {
      action: '//jsonplaceholder.typicode.com/posts/',
      onChange: this.handleChange,
      multiple: true,
    };
    return (
      <div class="" title="کنترل کامل">
        <Upload {...props}
        >
          <Button className="bgcolor rounded-lg bg-blue-500 text-white mt-2 leading-7 " size='large'>
            <img alt="" class="uploadbuttonimg inline pl-1 " src={require("./../../../Icons/images/Upload_icon.svg")} />
               آپلود رزومه
            </Button>
        </Upload>
      </div>
    );
  }
}
export default UploadFile;  