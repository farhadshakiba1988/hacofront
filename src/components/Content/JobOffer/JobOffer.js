// ---------------------------------
// Title: HR_job offers_empty state
// here we are implementing job offer action bar
// that divided into two section
// first jobOfferAddButton component
// second filter section
// ---------------------------------

import React from "react";
import {Row, Col, Input} from "antd";
import {useTranslation} from 'react-i18next';
import JobOfferAddButton from "./JobOfferActions/JobOfferAddButton";
import "./JobOffer.css";
import DataTable from "./DataTable/DataTable";



const JobOffer = (props) => {
    const {t} = useTranslation();
    const {Search} = Input;
    return (
        <div className="joboffer">
            <p className="joboffer-header text-right mr-4 mt-4 md:ml-3npm ">{t('job-request.1')}</p>
            <Row className="joboffer-actions">
                <JobOfferAddButton />
                <Col lg={{span: 18}} md={{span:18}} xs={{span: 24}} className='text-right'>
                    <Search
                        className='mr-4 sm:mr-4 md:mt-2 sm:mt-2 search' id='search'
                        placeholder="جستجو عنوان شغل ، دپارتمان یا محل کار"
                        onSearch={value => console.log(value)}
                    />
                </Col>
            </Row>
            <DataTable />
        </div>
    );
};

export default JobOffer;
