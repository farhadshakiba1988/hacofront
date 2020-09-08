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
    Spin
} from "antd";
import PrimaryButton from "../../../../BaseComponent/PrimaryButton/primaryButton";
import {Translation} from "react-i18next";
import BlocJobOfferForm from "../JobOfferBloc/Bloc";
import BlocBuilder from 'bloc-builder-react';

const {Option} = Select;
const {TextArea} = Input;

class JobOfferForm extends Component {
    constructor(props) {
        super(props);
        this.bloc = new BlocJobOfferForm();
        this.bloc.init();
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
                                                label="دپارتمان"
                                                className="joboffer-rightform-container"
                                                name={["department"]}
                                            >
                                                <Select
                                                    size='large'
                                                    className="joboffer-right-form"
                                                    showSearch
                                                    onChange={(val) => this.bloc.getDepIdModel({department_id: val})}
                                                    placeholder="انتخاب کنید"
                                                    optionFilterProp="children"
                                                    filterOption={(input, option) =>
                                                        option.children
                                                            .toLowerCase()
                                                            .indexOf(input.toLowerCase()) >= 0
                                                    }
                                                >
                                                    {
                                                        current.departments.map((el) => (
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
                                                label="عنوان شغل"
                                                className="joboffer-leftform-container"
                                                name={["job_title"]}
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

                                                </Select>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={{span: 12}} md={{span: 12}} xs={{span: 24}}>
                                            <Form.Item
                                                label="سمت سازمانی"
                                                className="joboffer-leftform-container"
                                                name={['org_title']}
                                            >
                                                <Select
                                                    size='large'
                                                    className="joboffer-right-form"
                                                    placeholder="انتخاب کنید"
                                                    optionFilterProp="children"
                                                >
                                                    {
                                                        current.organizations.map((org) => (
                                                            <Option
                                                                className="options-font"
                                                                value={org.name}
                                                                key={org.name}
                                                            >
                                                                {org.name}
                                                            </Option>
                                                        ))
                                                    }
                                                </Select>
                                            </Form.Item>
                                        </Col>
                                        <Col className='pr-3' lg={{span: 12}} md={{span: 12}} xs={{span: 24}}>
                                            <Form.Item
                                                label="محل کار"
                                                className="joboffer-leftform-container"
                                                name={['job_location']}
                                            >
                                                <Select
                                                    size='large'
                                                    className="joboffer-left-form"
                                                    placeholder="انتخاب کنید"
                                                    optionFilterProp="children"
                                                >
                                                    <Option className="options-font" value="farzin">
                                                        فرزین
                                                    </Option>
                                                </Select>
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col lg={{span: 24}} xs={{span: 24}}>
                                            <Form.Item className="joboffer-textarea-container"
                                                       label='شرح موقعیت شغلی'
                                                       labelCol={{span: 24}}
                                                       name={['job_description']}
                                            >
                                                <TextArea
                                                    rows={4}
                                                    className="joboffer-textarea"
                                                    placeholder="درباره این موقعیت شغلی و نیازمندی ها و شرایط لازم در اینجا توضیح دهید"
                                                />
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col lg={{span: 24}} xs={{span: 24}}>
                                            <Form.Item
                                                label='مهارت های مورد نیاز'
                                                labelCol={{span: 24}}
                                                name={["skills"]}
                                            >
                                                <Select
                                                    size='large'
                                                    className="skills"
                                                    mode="tags"
                                                    placeholder="مهارت های مورد نیاز شما ..."
                                                >
                                                    {children}
                                                </Select>
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
                                                <Select
                                                    className="joboffer-right-form"
                                                    size='large'
                                                    placeholder="انتخاب کنید"
                                                    optionFilterProp="children"
                                                >
                                                    {
                                                        current.educations.map((edu) => (
                                                            <Option
                                                                className="options-font"
                                                                value={edu.name}
                                                                key={edu.name}
                                                            >
                                                                {edu.name}
                                                            </Option>
                                                        ))
                                                    }
                                                </Select>
                                            </Form.Item>
                                        </Col>
                                        <Col className='pr-3' lg={{span: 12}} md={{span: 12}} xs={{span: 24}}>
                                            <Form.Item
                                                label="سابقه کاری مورد نیاز"
                                                className="joboffer-leftform-container"
                                            >
                                                <Select
                                                    className="joboffer-left-form"
                                                    size='large'
                                                    placeholder="انتخاب کنید"
                                                    optionFilterProp="children"
                                                    name={["experience"]}
                                                >
                                                    {
                                                        current.experiences.map((el) => (
                                                            <Option
                                                                className="options-font"
                                                                value={el.name}
                                                                key={el.name}
                                                            >
                                                                {el.name}
                                                            </Option>
                                                        ))
                                                    }
                                                </Select>
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
                                                <Select
                                                    className="joboffer-right-form salary"
                                                    size='large'
                                                    placeholder="انتخاب کنید"
                                                    optionFilterProp="children"
                                                >
                                                    {
                                                        current.salaries.map((el) => (
                                                            <Option
                                                                className="options-font"
                                                                value={el.name}
                                                                key={el.name}
                                                            >
                                                                {el.name}
                                                            </Option>
                                                        ))
                                                    }
                                                </Select>
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
                                                <Select
                                                    className="joboffer-left-form"
                                                    size='large'
                                                    placeholder="انتخاب کنید"
                                                    optionFilterProp="children"
                                                    name={["publish_time"]}
                                                >
                                                    {
                                                        current.publish_times.map((pub) => (
                                                            <Option
                                                                className="options-font"
                                                                value={pub.name}
                                                                key={pub.name}
                                                            >
                                                                {pub.name}
                                                            </Option>
                                                        ))
                                                    }
                                                </Select>
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

export default JobOfferForm
