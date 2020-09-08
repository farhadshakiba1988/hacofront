// -------------------------------------------------
// title: add job offer
// wireframe: HR_job offers_add job 1 ---> HR_job offers_add job 2 --- >HR_job offers_add job 3
// ---> HR_job offers_add job filled ---> HR_job offers_add job successfull
// Here we are implementing the Menu Section
// -------------------------------------------------

import React, { Component } from "react";
import PrimaryButton from "../../../../../../BaseComponent/PrimaryButton/primaryButton";
import { Translation } from "react-i18next";
import MoreInformationsBloc from "./../MoreInformationsBloc/Bloc";
import BlocBuilder from 'bloc-builder-react';
import "./Form.css";
import {
    Form,
    Select,
    ConfigProvider,
    Row,
    Col,
    Checkbox,
    Input,
    Alert,
    Empty,
    Spin,
    Tabs
} from "antd";


const { TabPane } = Tabs;

function callback(key) {
    console.log(key)
}

const { Option } = Select;
const { TextArea } = Input;

class MoreInformationsForm extends Component {
    bloc;
    constructor(props, context) {
        super(props, context);
        this.bloc = new MoreInformationsBloc();
        this.bloc.getDepartment();
    }
    onFinish = (values) => {
        console.log(values);
    };
    render() {
        const children = [];
        return (
            <BlocBuilder
                subject={this.bloc.getResumeArchiveFormSubject()}
                builder={(snap) => {
                    const current = snap.data;

                    if (snap.error) {
                        return <ConfigProvider direction={"rtl"}><Alert showIcon message={snap.error} description="لطفا چند لحظه دیگر اقدام کنید" type={'warning'} /></ConfigProvider>
                    }

                    if (!current) {
                        return <Empty />
                    }
                    const model = current.moreInfoModel;
                    console.log(model.departmentId);
                    return (
                        <Form
                            // className="job-offer-form"
                            hideRequiredMark={true}
                            layout="vertical"
                            onFinish={this.onFinish}
                        // name="validate_other"
                        >
                            <ConfigProvider direction="rtl">
                                <Spin spinning={current.loading}>
                                    <Row className='spacing-reset mt-5'>
                                        <Col lg={{ span: 12 }} md={{ span: 12 }} xs={{ span: 24 }} >
                                            <Form.Item id="labelStyle"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: "لطفا دپارتمان را انتخاب کنید",
                                                    },
                                                ]}

                                                //initialValue={current.model.department_id}

                                                // <span className='spantitle tracking-tight leading-8 pt-0'>دپارتمان</span> 
                                                className="joboffer-rightform-container"
                                                name={["department"]}

                                            >
                                                <span className='spantitles tracking-tight leading-8 pt-0'>دپارتمان</span>
                                                <span>{model.departmentId}</span>

                                            </Form.Item>
                                        </Col>
                                        <Col className='lg:pr-4' lg={{ span: 12 }} md={{ span: 12 }} xs={{ span: 24 }}>
                                            <Form.Item
                                                // label="عنوان شغل"
                                                className="joboffer-leftform-container"
                                                name={["job_title"]}
                                            >
                                                <span className='spantitles tracking-tight leading-8 pt-0'>عنوان شغل</span>
                                                <span>{model.jobTitleId}</span>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={{ span: 12 }} md={{ span: 12 }} xs={{ span: 24 }}>
                                            <Form.Item
                                                // label="سمت سازمانی"
                                                className="joboffer-leftform-container"
                                                name={['org_title']}
                                            >
                                                <span className='spantitles tracking-tight leading-8 pt-0'>سمت سازمانی</span>
                                                <span>{model.organizationTitleId}</span>
                                            </Form.Item>
                                        </Col>
                                        <Col className='lg:pr-4' lg={{ span: 12 }} md={{ span: 12 }} xs={{ span: 24 }}>
                                            <Form.Item
                                                // label="محل کار"
                                                className="joboffer-leftform-container"
                                                name={['job_location']}
                                            >
                                                <span className='spantitles tracking-tight leading-8 pt-0'>محل کار</span>
                                                <span>{model.joblocationId}</span>
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col lg={{ span: 24 }} xs={{ span: 24 }}>
                                            <Form.Item className="joboffer-textarea-container"
                                                // label='شرح موقعیت شغلی'
                                                labelCol={{ span: 24 }}
                                                name={['job_description']}
                                            >
                                                <span className='spantitles tracking-tight leading-8 pt-0'> شرح موقعیت شغلی</span>
                                                <TextArea rows={2} className="border-none bg-white sm:mr-4">{model.jobdescription}</TextArea>
                                            </Form.Item>
                                        </Col>
                                   </Row>
                                    <Row>
                                        <Col lg={{ span: 24 }} xs={{ span: 24 }}>
                                            <Form.Item className="joboffer-textarea-container"
                                                // label='مهارت ها'
                                                labelCol={{ span: 24 }}
                                                name={["skills"]}
                                            >  <span className='spantitles tracking-tight leading-8 pt-0'>مهارت ها </span>
                                                <TextArea rows={2}   className="skills bg-white border-none"
                                                    mode="tags"
                                                    disabled
                                                >
                                                {model.experienceId}
                                                </TextArea>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={{ span: 12 }} md={{ span: 12 }} xs={{ span: 24 }}>
                                            <Form.Item
                                                // label="تحصیلات مورد نیاز"
                                                className="joboffer-rightform-container"
                                                name={["education"]}
                                            >
                                                <span className='spantitles tracking-tight leading-8 pt-0'> تحصیلات مورد نیاز</span>
                                                <span>{model.educationId}</span>
                                            </Form.Item>
                                        </Col>
                                        <Col className='lg:pr-4' lg={{ span: 12 }} md={{ span: 12 }} xs={{ span: 24 }}>
                                            <Form.Item
                                                // label="سابقه کاری مورد نیاز"
                                                className="joboffer-leftform-container"
                                            >
                                                <span className='spantitles tracking-tight leading-8 pt-0'> سابقه کاری مورد نیاز  </span>
                                                <span>{model.experienceId}</span>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={{ span: 12 }} md={{ span: 12 }} xs={{ span: 24 }}>
                                            <Form.Item
                                                // label="علت درخواست"
                                                className="joboffer-rightform-container"
                                                name={["requestReasonId"]}
                                            >
                                                <span className='spantitles tracking-tight leading-8 pt-0'> علت درخواست  </span>
                                                <span>{model.requestReasonId}</span>
                                            </Form.Item>
                                        </Col>
                                        <Col className='lg:pr-4' lg={{ span: 12 }} md={{ span: 12 }} xs={{ span: 24 }}>
                                            <Form.Item
                                                // label="جنسیت"
                                                className="joboffer-rightform-container"
                                                name={["sexId"]}
                                            >
                                                <span className='spantitles tracking-tight leading-8 pt-0'>  جنسیت  </span>
                                                <span>{model.sexId}</span>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <div className="drawer-footer">
                                    <div className='submit-container'>
                                            <Form.Item>
                                                <PrimaryButton className='icon-gap mr-5 mt-1 sm:mr-1 md:mr-1 sm:mr-1 ' htmlType='submit'>
                                                    <Translation>
                                                        {(t) => {
                                                            return t("job-request.3");
                                                        }}
                                                    </Translation>
                                                </PrimaryButton>
                                            </Form.Item>
                                        </div>

                                        <div
                                            className="back-joboffer-container lg:mr-5 md:mr-5 md:ml-5 sm:mr-1 " >
                                            <div
                                                onClick={this.props.onClose}
                                                className="back-joboffer-drawer  ">
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
export default MoreInformationsForm
