import * as rxjs from 'rxjs';
import {getResumeArchives,GroupResumeArchive} from "./../../../../../../services/ResumeArchiveService";

class GroupResumeArchiveBloc {
    constructor() {
        this.repo = new GroupResumeArchiveRepository();
        this.subject = new rxjs.BehaviorSubject(this.repo);
    }
    postGroupResumeArchiveForm = () => {
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
            const {jobTitles, sendLocations} = data;

            // this.ResumeArchiveRepository.resumeArchiveModel = {
            // ...this.ResumeArchiveRepository.resumeArchiveModel,
            // jobTitles,
            //sendLocation,
            //education,
            //experience
            //
            this.repo.jobTitles = data.jobTitles;
            this.repo.sendLocations = data.sendLocations;
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
            const { data} = await GroupResumeArchive(this.repo.model);
            return data;
        }   catch (e) {
            throw e;
        }   finally {
            this.loading(false);
        }
    }
}
class GroupResumeArchiveRepository {
    model = {
        jobTitle_id: '',
        experience_id: '',
        sendLocation_id: '',
        fileUpload: '',
    }
    loading = false;
    hasError = false;
    jobTitles = [];
    sendLocation = [];
}
export default GroupResumeArchiveBloc;