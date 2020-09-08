import * as rxjs from 'rxjs';
import {getMoreInfo} from './../../../../services/JobOfferService';

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

    async getDepartment() {
        this.model.loading = true;
        this.formSubject.next(this.model);
        try {
            let ans;
            // const { Id } = this.props.match.params.Id;
            // await axios.get("http://192.168.27.10:8081/api/Department/GetByDepartmentId"+ Id).then(resp => {
                await axios.get("http://localhost:3001/api/Department").then(resp => {
            ans = resp.data;
                console.log(ans)
                return ans;
            });
            if (typeof ans === Object){
                this.formSubject.error('داده های ورودی قابل قبول نیست');
                return ;
            }
            this.model.moreInfoModel.department_id = ans.department_id;
            this.model.moreInfoModel.jobTitle_id = ans.jobTitle_id;
            this.model.moreInfoModel.organizationTitle_id = ans.organizationTitle_id;
            this.model.moreInfoModel. jobdescription = ans. jobdescription;
            this.model.moreInfoModel.jobskill_id = ans.jobskill_id;
            this.model.moreInfoModel.education_id = ans.education_id;
            this.model.moreInfoModel.experience_id = ans.experience_id;
            this.model.moreInfoModel.requestReason_id = ans.requestReason_id;
            this.model.moreInfoModel.sex_id = ans.sex_id;

        } catch (e) {
            this.model.hasError = true;
            this.formSubject.error('عدم ارتباط با سرور');
            throw e;
        } finally {
            this.model.loading = false;
            this.formSubject.next(this.model);
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

    moreInfoModel = {
    department_id:'',
    jobTitle_id :'',
    organizationTitle_id:'',
    joblocation_id:'',
    jobdescription: '',
    education_id:'',
    experience_id:'',
    requestReason_id:'',
    sex_id:'',
    jobskill_id : [],
    }
    loading = false;
    hasError = false;
}

export default MoreInformationsBloc;
