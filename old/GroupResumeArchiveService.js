import config from './../config.json';
import http from './httpService';

export const GroupResumeArchive = (resume) => {
    return http.post(`${config.api_Url}/api/newResume`,JSON.stringify(resume));
};

//`${config.toplearnapi}/api/course`,
//    return http.post(config.api_Url+"api/newResume", resume);