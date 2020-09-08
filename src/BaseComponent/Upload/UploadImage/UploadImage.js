import React from "react";
import { Card, Icon, Modal, Upload, Button } from "antd";
import "./UploadImage.css";
class UploadImage extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [{
      uid: -1,
    }],
  };
  handleCancel = () => this.setState({ previewVisible: false });
  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  };
  handleChange = ({ fileList }) => this.setState({ fileList });
  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <>
        <img alt="" className="imgpading inline pl-1 " src={require("./../../../Icons/images/photograph.svg")} />
      </>
    );
    return (
      <div title="آپلود عکس" class="uploadbutton bgcolor rounded-lg bg-white text-bg-blue-500  leading-7 ">
        <Upload
          onChange={this.handleChange}
        >
          <Button className="txtbtncolors bgcolor rounded-lg bg-blue-100 text-blue-600 lg:mt-2  xl:mt-2 leading-7" size='large'>
            {fileList.length >= 3 ? null : uploadButton} آپلود عکس
        </Button>
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}
export default UploadImage;
