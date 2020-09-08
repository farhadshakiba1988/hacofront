// -----------------------------
// here we are implementing jobOfferAddButton component
// we user Drawer component from ant design
// -----------------------------

import React from "react";
import {Col, Drawer} from "antd";
import {Translation} from "react-i18next";
import PlusIcon from "../../../../Icons/plusIcon.svg";
import "./JobOfferAddButton.css";
import JobOfferEvaluateForm from "../JobOfferForm/JobOfferEvaluateForm";
import PrimaryButton from "../../../../BaseComponent/PrimaryButton/primaryButton";

class JobOfferAddButton extends React.Component {
    state = {visible: false, placement: "left"};

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    onChange = (e) => {
        this.setState({
            placement: e.target.value,
        });
    };

    render() {
        const {placement, visible} = this.state;
        return (
            <>
                <Col lg={{span: 6}} md={{span: 6}} xs={{span: 24}} className='md:text-left lg:text-left'>
                    <PrimaryButton className='ml-4 sm:mr-4 button_mobile bg-red-400 text-white' onClick={this.showDrawer}>
                        <Translation>
                            {(t) => {
                                return t("job-request.3");
                            }}
                        </Translation> <img src={PlusIcon} alt='plus icon'/>

                    </PrimaryButton>
                </Col>
                <Drawer
                    placement={placement}
                    closable={true}
                    onClose={this.onClose}
                    visible={visible}
                    mask={true}
                    keyboard={true}
                    className='width'
                    title={<Translation>
                        {(t) => {
                            return t("job-request.3");
                        }}
                    </Translation>}
                >

                        <JobOfferEvaluateForm onClose={this.onClose}/>
                </Drawer>
            </>
        );
    }
}

export default JobOfferAddButton;
