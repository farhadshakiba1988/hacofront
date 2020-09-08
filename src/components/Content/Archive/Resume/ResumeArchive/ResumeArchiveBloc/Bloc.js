import * as rxjs from 'rxjs';
import {getResumeArchives , postResumeArchive} from './../../../../../../services/ResumeArchiveService';

class ResumeArchiveBloc {
    constructor() {
        this.repo = new ResumeArchiveRepository();
        this.subject = new rxjs.BehaviorSubject(this.repo);
    }
    getResumeArchiveFormSubject = () => {
        return this.subject;
    };
    refresh() {
        this.subject.next(this.repo)
    }
    error(text) {
        this.repo.model.hasError = true
        this.subject.error(text);
    }
    async init() {
        try {
            this.loading(true);
            const {data} = await getResumeArchives();
            const {jobTitles, sendLocations,educations,skills} = data;

           // this.ResumeArchiveRepository.resumeArchiveModel = {
               // ...this.ResumeArchiveRepository.resumeArchiveModel,
               // jobTitles,
                //sendLocation,
                //education,
                //experience
           //
            this.repo.jobTitles = data.jobTitles;
            this.repo.sendLocations = data.sendLocations;
            this.repo.educations = data.educations;
            this.repo.skills = data.skills;

            this.refresh();

        }   catch (e) {
            this.error('خطا در دریافت اطلاعات از سرور');
            throw e;
        }   finally {
            this.loading(false);
        }
    }
    onChangeModel(values) {
        this.repo.model.jobTitle_id = values.jobTitle_id;

        this.refresh();
    }
    loading(value) {
        this.repo.loading = value;
        this.refresh();
    }

    async save(values) {
        try {
            this.loading(true);
            this.repo.model = values;
            const {data} = await postResumeArchive(this.repo.model);
            return data;
        }   catch (e) {
            throw e;
        }   finally {
            this.loading(false);
        }
    }
}
class ResumeArchiveRepository {
    model = {
        jobTitle_id: '',
        education_id: '',
        experience_id: '',
        sendLocation_id: '',
        fileUpload: '',
        image: '',
        fullName: '',
        mobile: '',
        email: '',
        age: '',
        sex_id: '',
    }
    loading = false;
    hasError = false;
    jobTitles = [];
    sendLocations = [];
    educations = [];
    skills = [];
}
export default ResumeArchiveBloc;