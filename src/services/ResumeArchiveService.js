import config from '../../src/config.json';
import http from './httpService';

export function getResumeArchives() {
    return http.get(`${config.api_Url}/api/get`);
}


export function getALLResumeArchives() {
    return http.get(`${config.api_Url}/api/allresume`);
}



export const postResumeArchive = (resume) => {
    return http.post(`${config.api_Url}/api/personResumeArchive`,(resume));
};
export const getResumeArchiveFindByTitle=(title)=> {
    return http.get(`${config.api_Url}/api/personResumeArchive?title=${title}`);
  }



export const GroupResumeArchive = (resume) => {
    return http.post(`${config.api_Url}/api/newResume`,JSON.stringify(resume));
};