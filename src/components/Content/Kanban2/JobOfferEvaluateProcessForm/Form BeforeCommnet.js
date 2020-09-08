// -------------------------------------------------
// title: add job offer
// wireframe: HR_job offers_add job 1 ---> HR_job offers_add job 2 --- >HR_job offers_add job 3
// ---> HR_job offers_add job filled ---> HR_job offers_add job successfull
// Here we are implementing the Menu Section
// -------------------------------------------------

import React, {Component} from "react";
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
    Avatar,
    Comment,
    Tooltip
} from "antd";
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import PrimaryButton from "../../../../BaseComponent/PrimaryButton/primaryButton";
import {Translation} from "react-i18next";
import BlocJobOfferEvaluateForm from "./../JobOfferEvaluateProcessBloc/Bloc";
import BlocBuilder from 'bloc-builder-react';

const {Option} = Select;
const {TextArea} = Input;

class JobOfferEvaluateForm extends Component {
    constructor(props) {
        super(props);
        this.bloc = new BlocJobOfferEvaluateForm();
        this.bloc.init();
        this.bloc.initAdmin();
    }

    onFinish = (values) => {
        console.log(values);
    };
    render() {
        const children = [];
        return (
            <BlocBuilder
                subject={this.bloc.getFormSubject()}
                builder={(snap) => {
                    const current = snap.data;
                    if (snap.error) {
                        return <ConfigProvider direction={"rtl"}><Alert showIcon message={snap.error} description="لطفا چند لحظه دیگر اقدام کنید" type={'warning'}/></ConfigProvider>
                    }
                    if (!current) {
                        return <Empty />
                    }
                    return (
                        <Form
                            className="job-offer-form"
                            hideRequiredMark={true}
                            onFinish={this.onFinish}
                            name="validate_other"
                        >
                            <ConfigProvider direction="rtl">
                                <Spin spinning = {current.loading}>
                                    <Row className='spacing-reset'>
                                        <Col lg={{span: 12}} md={{span: 12}} xs={{span: 24}}>
                                            <Form.Item
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: "لطفا دپارتمان را انتخاب کنید",
                                                    },
                                                ]}
                                                //initialValue={current.model.department_id}
                                                label="نام و نام خانوادگی متقاضی"
                                                className="joboffer-rightform-container"
                                                name={["department"]}
                                            >
                           <label> {current.fname}</label>    <label> {current.lname}</label>

                                            </Form.Item>
                                        </Col>

                                    </Row>
                                    <Row>
                                        <Col lg={{span: 12}} md={{span: 12}} xs={{span: 24}}>
                                            <Form.Item
                                                label=""
                                                className="joboffer-leftform-container"
                                                name={['org_title']}
                                            >
                                                <label> ارسالی از </label>    <label> {current.sendLocation_id}</label><label> در تاریخ </label>  <label> {current.senddate} </label>
                                            </Form.Item>
                                        </Col>
                                        <Col className='pr-3' lg={{span: 12}} md={{span: 12}} xs={{span: 24}}>
                                            <Form.Item
                                                label=""
                                                className="joboffer-leftform-container"
                                                name={['job_location']}
                                            >
                                                {/*<div className="gx-profileon-thumb">   <img src={current.image} className="gx-rounded-lg"  alt=""/></div>*/}
                                                <Avatar src={current.image}   width={200} />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={{span: 24}} xs={{span: 24}}>
                                            <Form.Item
                                                label='پست مدیر'
                                                labelCol={{span: 24}}
                                                name={["skills"]}
                                            >
                                                <label> {current.post_id}</label>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={{span: 24}} xs={{span: 24}}>
                                            <Form.Item className="joboffer-textarea-container"
                                                       label='امتیاز'
                                                       labelCol={{span: 24}}
                                                       name={['score']}
                                                //rules={[{ required: true, message: 'لطفا سن خود را وارد نمایید' }]}
                                            >
                                                <Input
                                                    className="joboffer-left-form textinput inline"
                                                    placeholder=""
                                                />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={{span: 24}} xs={{span: 24}}>
                                            <Form.Item className="joboffer-textarea-container"
                                                       label=''
                                                       labelCol={{span: 24}}
                                                       name={['job_description']}
                                            >
                                                <TextArea  autoSize={{ minRows: 2, maxRows: 6 }}
                                                           placeholder="نظر شما در مورد متقاضی"
                                                />
                                            </Form.Item>
                                        </Col>
                                    </Row>


                                    <Row>
                                        <Col lg={{span: 12}} md={{span: 12}} xs={{span: 24}}>
                                            <Form.Item
                                                label="تحصیلات مورد نیاز"
                                                className="joboffer-rightform-container"
                                                name={["education"]}
                                            >

                                            </Form.Item>
                                        </Col>
                                        <Col className='pr-3' lg={{span: 12}} md={{span: 12}} xs={{span: 24}}>
                                            <Form.Item
                                                label="سابقه کاری مورد نیاز"
                                                className="joboffer-leftform-container"
                                            >

                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={{span: 12}} md={{span: 12}} xs={{span: 24}}>
                                            <Form.Item
                                                label="حقوق ماهیانه"
                                                className="joboffer-rightform-container"
                                                name={["salary"]}
                                            >

                                            </Form.Item>
                                            <Checkbox className="salary-show" onChange={this.onChange}>
                                                نمایش حقوق به متقاضی
                                            </Checkbox>
                                        </Col>
                                        <Col lg={{span: 12}} md={{span: 12}} xs={{span: 24}} className='publish-time pr-3'>
                                            <Form.Item
                                                label="مدت انتشار در سایت"
                                                className="joboffer-leftform-container"
                                            >

                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <div className="drawer-footer">
                                        <div className='submit-container'>
                                            <Form.Item>
                                                <PrimaryButton className='icon-gap mr-5 mt-1 sm:mr-1 md:mr-1 sm:mr-1' htmlType='submit'>
                                                    <Translation>
                                                        {(t) => {
                                                            return t("job-request.3");
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

export default JobOfferEvaluateForm
