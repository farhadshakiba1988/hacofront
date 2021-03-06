import * as rxjs from 'rxjs';
import {getRedirectAdmin,postApplicantForEvaluate} from './../../../../services/JobOfferService';


class BlocJobOfferForm {
    constructor() {
        this.repo  = new JobOfferApplicantForEvaluateRepository();
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
            const {data} = await getApplicantForEvaluate();
            const {department_id,jobTitle_id,joblocation_id,image,fname,lname,sendLocation_id} = data;

            this.repo.department_id = data.department_id;
            this.repo.jobTitle_id = data.jobTitle_id;
            this.repo.jobLocation_id = data.jobLocation_id;
            this.repo.image = data.image;
            this.repo.resume = data.resume;
            this.repo.fname = data.fname;
            this.repo.lname = data.lname;
            this.repo.senddate = data.senddate;
            this.repo.sendLocation_id = data.sendLocation_id;

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
            const {data} = await postApplicantForEvaluate(this.repo.model);
            return data;
        }   catch (e) {
            throw e;
        }   finally {
            this.loading(false);
        }
    }
    getDepIdModel(input) {
        this.model.depId = {...input};
        console.log(this.model.education_id)
    }
}
class JobOfferApplicantForEvaluateRepository {
    model = {
        department_id :'',
        post_id: '',
        joblocation_id:'',
        fname:'',
        lname:'',
        score:'',
        status_id:'',
        description:'',
    }
    department_id ='';
    jobTitle_id= '';
    education_id= '';
    joblocation_id='';
    sendLocation_id= '';
    jobdescription='';
    jobskill_id='';
    organization_id='';
    experience='';
    reason_id='';
    senddate='';
    fname='';
    lname='';
    image='';
    email='';
    mobile='';
    sex_id='';
    age='';
    resume='';
    description='';

    loading = false;
    hasError = false;
}
export default BlocJobOfferForm;
