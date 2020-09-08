import React, { Component } from "react";
import {
    Button,
    Card,
    Col,
    Row,
    Input,
    Drawer,
    Tabs,
    Form,
    Select,
    Tooltip,
    Empty,
    Alert,
    ConfigProvider,
    Spin
} from "antd";
import "./Form.css";
import { CloseOutlined } from '@ant-design/icons';
import UploadGroupResume from "./../../../../../../BaseComponent/Upload/UploadDrag&Drop/DragDrop";
import BlocBuilder from 'bloc-builder-react';
import GroupResumeArchiveBloc from "./../GroupResumeArchiveBloc/Bloc";
import ResumeArchiveBloc from "./../GroupResumeArchiveBloc/Bloc";
import PrimaryButton from "./../../../../../../BaseComponent/PrimaryButton/primaryButton";
import {Translation} from "react-i18next";


const { Option } = Select;
class GroupResumeArchiveForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.bloc = new GroupResumeArchiveBloc();
    this.bloc.save();
  }
    onFinish = values => {
        console.log(values);
    };
    onReset = () => {
        this.formRef.current.resetFields();
    };
    handleSubmit = (values) => {
        this.bloc.save(values);
    };
    formRef = React.createRef();
  render() {
    return (
      <BlocBuilder subject={this.bloc.postGroupResumeArchiveForm()} builder={(snap) => {
        const current = snap.data;
        if (snap.error) {
            return <ConfigProvider direction={"rtl"}><Alert showIcon message={snap.error} description="لطفا چند لحظه دیگر اقدام کنید" type={'warning'}/></ConfigProvider>
        }
        if (!current) {
          return <Empty active />
        }
        return (
           <Form
               className="job-offer-form"
               hideRequiredMark={true}
               onFinish={this.handleSubmit} ref={this.formRef} onSubmit={this.handleSubmit}
               name="validate_other"
               >
               <ConfigProvider direction="rtl">
                   <Spin spinning = {current.loading}>
              <Row >
                  <Col lg={{span: 24}} xs={{span: 24}}>
                  <Form.Item  name={["ResumeFile"]} label="فایل رزومه"
                    rules={[{ required: true, message: 'لطفا فایل رزومه را انتخاب کنید' }]}>
                    <span className='spantitle tracking-tight leading-8 pt-0'>فرمت رزومه ها باید PDF باشد</span>
                    <UploadGroupResume />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                  <Col lg={{span: 12}} md={{span: 12}} xs={{span: 24}}>
                  <Form.Item  name={["job_title"]} label="عنوان شغل" rules={[{ required: true, message: 'لطفا عنوان شغل خود را انتخاب کنید' }]} >

                      <Select
                          size='large'
                          className="joboffer-right-form"
                          showSearch
                          onChange={(val) => this.bloc.onChangeModel({jobTitle_id: val})}
                          placeholder="انتخاب کنید"
                          optionFilterProp="children"
                          filterOption={(input, option) =>
                              option.children
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                          }
                      >
                          {
                              current.jobTitles.map((el) => (
                                  <Option
                                      className="options-font"
                                      value={el.id}
                                      key={el.id}
                                  >
                                      {el.name}
                                  </Option>
                              ))
                          }
                      </Select>
                  </Form.Item>
                </Col>
                  <Col className='pr-3' lg={{span: 12}} md={{span: 12}} xs={{span: 24}}>
                      <Form.Item
                          label="منبع رزومه"
                          className="joboffer-leftform-container"
                          name={["send"]}
                      >
                          <Select
                              size='large'
                              className="joboffer-left-form "
                              showSearch
                              placeholder="انتخاب کنید"
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                  option.children
                                      .toLowerCase()
                                      .indexOf(input.toLowerCase()) >= 0
                              }
                          >
                              {
                                  current.sendLocation.map((location) => (
                                      <Option
                                          className="options-font"
                                          value={location.id}
                                          key={location.id}
                                      >
                                          {location.name}
                                      </Option>
                                  ))
                              }
                          </Select>
                      </Form.Item>
                  </Col>
              </Row>
              <Row >
                <Col lg={24} xs={24} sm={24}>
                  <Form.Item name="email" label="عنوان شغل و محل ارسال رزومه های آپلود شده را انتخاب کنید">
                  </Form.Item>
                </Col>
              </Row>
               <div className="drawer-footer">
                   <div className='submit-container'>
                       <Form.Item>
                           <PrimaryButton className='icon-gap mr-5 mt-1 sm:mr-1 md:mr-1 sm:mr-1 text-white bg-red-400' htmlType='submit'>
                               <Translation>
                                   {(t) => {
                                       return t("job-request.7");
                                   }}
                               </Translation>
                           </PrimaryButton>
                       </Form.Item>
                   </div>

                   <div
                       className="back-joboffer-container"
                   >
                       <div
                           onClick={this.props.onClose}
                           className="back-joboffer-drawer s"
                       >
                           <Translation>
                               {(t) => {
                                   return t("base");
                               }}
                           </Translation>
                       </div>
                   </div>
               </div>
                   </Spin>
               </ConfigProvider>
           </Form>
           )
           }}
           >
        </BlocBuilder>
        );
      }
      }
export default GroupResumeArchiveForm;