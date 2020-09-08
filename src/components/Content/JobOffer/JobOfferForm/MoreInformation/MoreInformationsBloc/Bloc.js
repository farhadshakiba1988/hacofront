import * as rxjs from 'rxjs';
import {getMoreInfo} from './../../../../../../services/JobOfferService';


class MoreInformationsBloc {
    model;
    constructor() {
        this.repo  = new JobOfferMoreInfoRepository();
        this.subject = new rxjs.BehaviorSubject(this.repo )
    }
    getFormSubject = () => {
        return this.subject;
    }
    refresh() {
        this.subject.next(this.repo)
    }
    error(text) {
        this.repo.model.hasError = true
        this.subject.error(text);
    }
    loading(value) {
        this.repo.loading = value;
        this.refresh();
    }
    async init() {
        let rowid;
        this.loading(true);
        try {
            this.loading(true);
            const {data} = await getMoreInfo(rowid);
            const {department_id, jobTitle_id, jobLocation_id, jobSkill_id, organization_id, education_id, experiences, reason_id,sex_id} = data;

            this.repo.department_id = data.department_id;
            this.repo.jobTitle_id = data.jobTitle_id;
            this.repo.jobLocation_id = data.jobLocation_id;
            this.repo.jobSkill_id = data.jobSkill_id;
            this.repo.organization_id = data.organization_id;
            this.repo.education_id = data.education_id;
            this.repo.experience_id = data.experience_id;
            this.repo.reason_id = data.reason_id;
            this.repo.jobDescription = data.jobDescription;
            this.repo.sex_id = data.sex_id;

            this.refresh();

        }   catch (e) {
            this.error('خطا در دریافت اطلاعات از سرور');
            throw e;
        }   finally {
            this.loading(false);
        }
    }
    getDepIdModel(input) {
        this.model.depId = {...input};
        console.log(this.model.department_id)
    }
    getFormSubject = () => {
        return this.formSubject;
    }
}
class JobOfferMoreInfoRepository {
    department_id='';
    jobTitle_id='';
    organization_id='';
    joblocation_id='';
    jobdescription='';
    education_id='';
    experience_id='';
    requestReason_id='';
    sex_id='';
    jobskill_id = [];
    loading = false;
    hasError = false;
}
export default MoreInformationsBloc;
