import * as rxjs from 'rxjs';
import { toast } from "react-toastify";
import {getResumeArchiveFindByTitle} from  './../../../../services/ResumeArchiveService';
// import HttpDefaultMessage from './../../../Function/httpDefaultMessage';

let requestOptions = {
    method: 'GET',
    redirect: 'follow'
};
class FindByTitleResumeArchiveBloc {
    constructor() {
        this.FindByTitleResumeArchiveRepository = new FindByTitleResumeArchiveRepository();
        this.findbytitleresumeformSubject = new rxjs.BehaviorSubject(this.FindByTitleResumeArchiveRepository);
    }
    getResumeArchiveFormSubject = () => {
        return this.findbytitleresumeformSubject;
    };
    async getDataAxios() {
        this.FindByTitleResumeArchiveRepository.loading = true;
        this.findbytitleresumeformSubject.next(this.FindByTitleResumeArchiveRepository);
        let data;
        try {
            const { data } = await getResumeArchiveFindByTitle();
            // if (!Array.isArray(data)) {
            //     this.resumeArchiveForm.error('داده های ورودی قابل قبول نیست');
            //     return;
            // }
            // else {
            this.FindByTitleResumeArchiveRepository.resumeArchiveModel.jobTitles = data.jobTitles;
            this.FindByTitleResumeArchiveRepository.resumeArchiveModel.sendLocation = data.sendLocation;
            this.FindByTitleResumeArchiveRepository.resumeArchiveModel.education = data.education;
            this.FindByTitleResumeArchiveRepository.resumeArchiveModel.experience = data.experience;
            // }
        }
        catch (e) {
            this.FindByTitleResumeArchiveRepository.hasError = true;
            this.findbytitleresumeformSubject.error('خطا در دریافت اطلاعات از سرور');
            throw e;
        } finally {
            this.FindByTitleResumeArchiveRepository.loading = false;
            this.findbytitleresumeformSubject.next(this.FindByTitleResumeArchiveRepository);
        }



    }
    getFullName(input) {
        this.FindByTitleResumeArchiveRepository.fullName = { ...input };
        console.log(this.FindByTitleResumeArchiveRepository.fullName)
    }
    async postData() {
        let data = new FormData();
        data.append(ResumeArchiveData);

    const ResumeArchiveData = {
    fullName:'',
        };

        this.FindByTitleResumeArchiveRepository.loading = true;
        this.findbytitleresumeformSubject.next(this.FindByTitleResumeArchiveRepository);
        try {
   
            const { status,data } = await getResumeArchiveFindByTitle(data);
            if (status === 201) {
                toast.success("اطلاعات با موفقیت ارسال شد.");
            console.log(data);
        }
         } catch (e) {
            throw e;
        } finally {
        }
    }
}
class FindByTitleResumeArchiveRepository {
    fullName = '';
    loading = false;
    hasError = false;
}
export default FindByTitleResumeArchiveBloc;