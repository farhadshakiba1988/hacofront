import * as rxjs from 'rxjs';
import {getJobOffer,postJobOffer} from './../../../../services/JobOfferService';



class BlocJobOfferForm {
    constructor() {
        this.repo  = new JobOfferRepository();
        this.subject = new rxjs.BehaviorSubject(this.repo)
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
    onChangeModel(values) {
        this.repo.model.jobTitle_id = values.jobTitle_id;
        this.refresh();
    }

    getFormSubject = () => {
        return this.subject;
    }
    async init() {
        this.loading(true);
        try {
            this.loading(true);
            const {data} = await getJobOffer();
            const {departments,jobTitles,jobLocations,jobSkills,organizations, educations, experiences,reasons} = data;

            this.repo.departments = data.departments;
            this.repo.jobTitles = data.jobTitles;
            this.repo.jobLocations = data.jobLocations;
            this.repo.jobSkills = data.jobSkills;
            this.repo.organizations = data.organizations;
            this.repo.educations = data.educations;
            this.repo.experiences = data.experiences;
            this.repo.reasons = data.reasons;
            this.repo.jobDescription = data.jobDescription;

            this.refresh();

        }   catch (e) {
            this.error('خطا در دریافت اطلاعات از سرور');
            throw e;
        }   finally {
            this.loading(false);
        }
    }

    async save(values) {
        try {
            this.loading(true);
            this.repo.model = values;
            const {data} = await postJobOffer(this.repo.model);
            return data;
        }   catch (e) {
            throw e;
        }   finally {
            this.loading(false);
        }
    }
    getDepIdModel(input) {
        this.model.department_id = {...input};
        console.log(this.model.department_id)
    }

}
class JobOfferRepository {
    model = {
        department_id :'',
        jobTitles_id: '',
        education_id: '',
        joblocation_id:'',
        jobdescription:'',
        jobskill_id:'',
        organization_id:'',
        experience_id:'',
        sex_id:'',
       reason_id:'',
    }

    department_id = [];
    jobTitle_id = [];
    jobLocation_id = [];
    jobDescription = '';
    jobSkill_id = [];
    organization_id = [];
    education_id = [];
    experiences = [];
    reason_id=[];
    sex_id=[];
    loading = false;
    hasError = false;
}


export default BlocJobOfferForm;
