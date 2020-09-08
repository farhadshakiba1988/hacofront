import { toast } from "react-toastify";


function HttpMessage(statusCode, Message) {
    if (statusCode === 200) {
        toast.success(Message);
    }
    else if (statusCode === 100) {
        toast.error(Message);
    }
    else if (statusCode === 101) {
        toast.error(Message);
    }
    else if (statusCode === 102) {
        toast.error(Message);
    }
    else if (statusCode === 201) {
        toast.error(Message);
    }
    else if (statusCode === 202) {
        toast.error(Message);
    }
    else if (statusCode === 203) {
        toast.error(Message);
    }
    else if (statusCode === 204) {
        toast.error(Message);
    }
    else if (statusCode === 205) {
        toast.error(Message);
    }
    else if (statusCode === 206) {
        toast.error(Message);
    }
    else if (statusCode === 207) {
        toast.error(Message);
    }
    else if (statusCode === 300) {
        toast.error(Message);
    }
    else if (statusCode === 301) {
        toast.error(Message);
    }
    else if (statusCode === 302) {
        toast.error(Message);
    }
    else if (statusCode === 303) {
        toast.error(Message);
    }
    else if (statusCode === 304) {
        toast.error(Message);
    }
    else if (statusCode === 305) {
        toast.error(Message);
    }
    else if (statusCode === 307) {
        toast.error(Message);
    }
    else if (statusCode === 308) {
        toast.error(Message);
    }
    else if (statusCode === 400) {
        toast.error(Message);
    }
    else if (statusCode === 401) {
        toast.error(Message);
        localStorage.removeItem('token');
        window.location = "/"
    }
    else if (statusCode === 402) {
        toast.error(Message);
    }
    else if (statusCode === 403) {
        toast.error(Message);
    }
    else if (statusCode === 404) {
        toast.error(Message);
    }
    else if (statusCode === 405) {
        toast.error(Message);
    }
    else if (statusCode === 406) {
        toast.error(Message);
    }
    else if (statusCode === 407) {
        toast.error(Message);
    }
    else if (statusCode === 408) {
        toast.error(Message);
    }
    else if (statusCode === 409) {
        toast.error(Message);
    }
    else if (statusCode === 410) {
        toast.error(Message);
    }
    else if (statusCode === 411) {
        toast.error(Message);
    }
    else if (statusCode === 412) {
        toast.error(Message);
    }
    else if (statusCode === 413) {
        toast.error(Message);
    }
    else if (statusCode === 414) {
        toast.error(Message);
    }
    else if (statusCode === 415) {
        toast.error(Message);
    }
    else if (statusCode === 416) {
        toast.error(Message);
    }
    else if (statusCode === 417) {
        toast.error(Message);
    }
    else if (statusCode === 421) {
        toast.error(Message);
    }
    else if (statusCode === 422) {
        toast.error(Message);
    }
    else if (statusCode === 423) {
        toast.error(Message);
    }
    else if (statusCode === 424) {
        toast.error(Message);
    }
    else if (statusCode === 425) {
        toast.error(Message);
    }
    else if (statusCode === 426) {
        toast.error(Message);
    }
    else if (statusCode === 428) {
        toast.error(Message);
    }
    else if (statusCode === 429) {
        toast.error(Message);
    }
    else if (statusCode === 431) {
        toast.error(Message);
    }
    else if (statusCode === 451) {
        toast.error(Message);
    }
    else if (statusCode === 500) {
        toast.error(Message);
    }
    else if (statusCode === 501) {
        toast.error(Message);
    }
    else if (statusCode === 502) {
        toast.error(Message);
    }
    else if (statusCode === 503) {
        toast.error(Message);
    }
    else if (statusCode === 504) {
        toast.error(Message);
    }
    else if (statusCode === 505) {
        toast.error(Message);
    }
    else if (statusCode === 506) {
        toast.error(Message);
    }
    else if (statusCode === 507) {
        toast.error(Message);
    }
    else if (statusCode === 508) {
        toast.error(Message);
    }
    else if (statusCode === 510) {
        toast.error(Message);
    }
    else if (statusCode === 511) {
        toast.error(Message);
    }
    else if (statusCode === 103) {
        toast.error(Message);
    }
    else if (statusCode === 420) {
        toast.error(Message);
    }
    else if (statusCode === 440) {
        toast.error(Message);
    }
    else if (statusCode === 449) {
        toast.error(Message);
    }
    else if (statusCode === 450) {
        toast.error(Message);
    }
    else if (statusCode === 551) {
        toast.error(Message);
    }
    else if (statusCode === 498) {
        toast.error(Message);
    }
    else if (statusCode === 499) {
        toast.error(Message);
    }
    else if (statusCode === 509) {
        toast.error(Message);
    }
    else if (statusCode === 530) {
        toast.error(Message);
    }
}

export default HttpMessage;