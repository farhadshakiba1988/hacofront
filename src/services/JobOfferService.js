import config from '../../src/config.json';
import http from './httpService';

export function getJobOffer() {
    return http.get(`${config.api_Url}/api/Department/GetAll`);
}
export const postJobOffer = (jobOffer) => {
    return http.post(`${config.api_Url}/api/jobOffer`,(jobOffer));
};
export const getResumeArchiveFindByTitle=(title)=> {
    return http.get(`${config.api_Url}/api/personResumeArchive?title=${title}`);
  }

export const getMoreInfo = (rowId) => {
    return http.get(`${config.api_Url}/api/getMoreInfo/${rowId}`);
};

export const getJobOfferProcess = (rowId) => {
    return http.get(`${config.api_Url}/api/getJobOfferProcess/${rowId}`);
};



/*export const getApplicantForEvaluate = (issueCol) => {
    return http.get(`${config.api_Url}/api/getApplicantForEvaluate/${issueCol}`);
};*/

export const getApplicantForEvaluate = () => {
    return http.get(`${config.api_Url}/api/getApplicantForEvaluate`);
};


export const postApplicantForEvaluate = (ApplicantForEvaluate) => {
    return http.post(`${config.api_Url}/api/ApplicantForEvaluate`,(ApplicantForEvaluate));
};

export const getRedirectAdmin = () => {
    return http.get(`${config.api_Url}/api/getRedirectAdmin`);
};

export const postApplicantResult = (ApplicantResult) => {
    return http.post(`${config.api_Url}/api/ApplicantResult`,(ApplicantResult));
};

export const deleteApplicantResult = (ApplicantResultId) => {
    return http.delete(`${config.api_Url}/api/deleteApplicantResult/${ApplicantResultId}`);
};


export const updateApplicantResult  = (ApplicantResult) => {
    return http.put(`${config.api_Url}/api/updateApplicantResult`,(ApplicantResult));
};