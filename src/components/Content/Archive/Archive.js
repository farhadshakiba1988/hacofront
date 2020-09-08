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
import ResumeArchiveAddButton from "./ResumeArchiveActions/ResumeArchiveAddButton";
import "./Archive.css";
import DataTable from "./DataTable/DataTable";



const Archive = (props) => {
    const {t} = useTranslation();
    const {Search} = Input;
    return (
        <div className="joboffer">
            <p className="joboffer-header text-right mr-4 mt-4">{t('job-request.4')}</p>
            <Row className="joboffer-actions">
                <ResumeArchiveAddButton />
                <Col xl={12} lg={12} sm={24} md={12} xs={24} className='text-right'>
                    <Search
                        className='mr-4 sm:mr-4 md:mt-2 sm:mt-2 search '  id='search'
                        placeholder="جستجو عنوان شغل "
                        onSearch={value => console.log(value)}
                    />
                </Col>
            </Row>
            <DataTable />
        </div>
    );
};

export default Archive;
