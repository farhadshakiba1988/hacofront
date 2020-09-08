const { toast } = require("react-toastify");

function HttpDefaultMessage(statusCode) {
    if (statusCode === 200) {
        toast.success("حله یا بسیار خوب – OK");
    }
    else if (statusCode === 100) {
        toast.error("ادامه – Continue");
    }
    else if (statusCode === 101) {
        toast.error("پروتکل انتقال – Switching Protocols");
    }
    else if (statusCode === 102) {
        toast.error("پردازش – Processing");
    }
    else if (statusCode === 201) {
        toast.error("ایجاد شده است – Created");
    }
    else if (statusCode === 202) {
        toast.error("پذیرفته شده است – Accepted");
    }
    else if (statusCode === 203) {
        toast.error("اطلاعات غیرمجاز – Non-Authoritative Information");
    }
    else if (statusCode === 204) {
        toast.error("بدون محتوا – No Content");
    }
    else if (statusCode === 205) {
        toast.error("تنظیم مجدد محتوا – Reset Content");
    }
    else if (statusCode === 206) {
        toast.error("محتوای ناقص (جزئی) – Partial Content");
    }
    else if (statusCode === 207) {
        toast.error("چند وضعیتی – Multi-Status");
    }
    else if (statusCode === 300) {
        toast.error("چند گزینه‌ای – Multiple Choices");
    }
    else if (statusCode === 301) {
        toast.error("انتقال دائم (معروف به ریدایرکت 301) – Moved Permanently");
    }
    else if (statusCode === 302) {
        toast.error("تغییر مسیر موقت – Found");
    }
    else if (statusCode === 303) {
        toast.error("دیگری را ببینید – See Other");
    }
    else if (statusCode === 304) {
        toast.error("اصلاح نشده – Not Modified");
    }
    else if (statusCode === 305) {
        toast.error("استفاده از پراکسی – Use Proxy");
    }
    else if (statusCode === 307) {
        toast.error("تغییر مسیر موقت (ریدایرکت موقت) – Temporary Redirect");
    }
    else if (statusCode === 308) {
        toast.error("تغییر مسیر دائم – Permanent Redirect");
    }
    else if (statusCode === 400) {
        toast.error("درخواست بد – Bad Request");
    }
    else if (statusCode === 401) {
        toast.error("غیرمجاز – Unauthorized");
        localStorage.removeItem('token');
        window.location = "/"
    }
    else if (statusCode === 402) {
        toast.error("پرداخت الزامی است – Payment Required");
    }
    else if (statusCode === 403) {
        toast.error("ممنوع – Forbidden");
    }
    else if (statusCode === 404) {
        toast.error("یافت نشد – Not Found");
    }
    else if (statusCode === 405) {
        toast.error("روش غیرمجاز – Method Not Allowed");
    }
    else if (statusCode === 406) {
        toast.error("غیرقابل پذیرش – Not Acceptable");
    }
    else if (statusCode === 407) {
        toast.error("تایید پراکسی الزامی است – Proxy Authentication Required");
    }
    else if (statusCode === 408) {
        toast.error("مهلت زمانی درخواست، پایان یافته است – Request Time-out");
    }
    else if (statusCode === 409) {
        toast.error("تعارض و یا تضاد – Conflict");
    }
    else if (statusCode === 410) {
        toast.error("رفته (گذشته) – Gone");
    }
    else if (statusCode === 411) {
        toast.error("طول مورد نیاز – Length Required");
    }
    else if (statusCode === 412) {
        toast.error("پیش‌ نیاز لازم انجام نشد – Precondition Failed");
    }
    else if (statusCode === 413) {
        toast.error("موجودیت درخواست خیلی طولانی است – Request Entity Too Large");
    }
    else if (statusCode === 414) {
        toast.error("درخواست نشانی اینترنتی خیلی طولانی است – Request-URI Too Large");
    }
    else if (statusCode === 415) {
        toast.error("(این) نوع رسانه پشتیبانی نمی‌شود – Unsupported Media Type");
    }
    else if (statusCode === 416) {
        toast.error("بُعد درخواست، رضایتبخش نیست – Request Range Not Satisfiable");
    }
    else if (statusCode === 417) {
        toast.error("انتظار برآورده نشد – Expectation Failed");
    }
    else if (statusCode === 421) {
        toast.error("درخواست گمراه‌کننده – Misdirected Request");
    }
    else if (statusCode === 422) {
        toast.error("هویت غیرقابل پردازش – Unprocessable Entity");
    }
    else if (statusCode === 423) {
        toast.error("قفل شده – Locked");
    }
    else if (statusCode === 424) {
        toast.error("وابستگی از بین رفت – Failed Dependency");
    }
    else if (statusCode === 425) {
        toast.error("مجموعه نامرتب – Unordered Collection");
    }
    else if (statusCode === 426) {
        toast.error("نیازمند به ارتقارسانی – Upgrade Required");
    }
    else if (statusCode === 428) {
        toast.error("پیش‌نیاز لازم است – Precondition Required");
    }
    else if (statusCode === 429) {
        toast.error("درخواست‌های بسیار زیاد – Too Many Requests");
    }
    else if (statusCode === 431) {
        toast.error("فیلدهای درخواست سرصفحه خیلی بزرگ است – Request Header Fields Too Large");
    }
    else if (statusCode === 451) {
        toast.error("به دلایل قانونی غیرقابل دسترس است – Unavailable For Legal Reasons");
    }
    else if (statusCode === 500) {
        toast.error("خطای سرویس‌دهنده‌ی داخلی – Internal Server Error");
    }
    else if (statusCode === 501) {
        toast.error("قابل اجرا نیست – Not Implemented");
    }
    else if (statusCode === 502) {
        toast.error("دروازه‌ی بد – Bad Gateway");
    }
    else if (statusCode === 503) {
        toast.error("خدمات در دسترس نیست – Service Unavailable");
    }
    else if (statusCode === 504) {
        toast.error("وقفه در دروازه – Gateway Time-out");
    }
    else if (statusCode === 505) {
        toast.error("این نسخه از HTTP قابل پشتیبانی نیست – HTTP Version Not Supported");
    }
    else if (statusCode === 506) {
        toast.error("متغیر قابل انتقال – Variant Also Negotiates");
    }
    else if (statusCode === 507) {
        toast.error("فضا ذخیره‌سازی ناکافی است – Insufficient Storage");
    }
    else if (statusCode === 508) {
        toast.error("حلقهشناسایی شده است – Loop Detected");
    }
    else if (statusCode === 510) {
        toast.error("تمدید نشده – Not Extended");
    }
    else if (statusCode === 511) {
        toast.error("احراز صلاحیت شبکه مورد نیاز است – Network Authentication Required");
    }
    else if (statusCode === 103) {
        toast.error("محل بررسی (چک‌پوینت) – Checkpoint");
    }
    else if (statusCode === 420) {
        toast.error("روش با شکست مواجه شده است – Method Failure یا آرامش خود را ارتقا ببخشید – Enhance Your Calm");
    }
    else if (statusCode === 440) {
        toast.error("پایان زمان ورود – Login Timeout");
    }
    else if (statusCode === 449) {
        toast.error("تلاش دوباره – Retry With");
    }
    else if (statusCode === 450) {
        toast.error("مسدود شده به وسیله‌ی برنامه‌های کنترل توسط والدین که در ویندوز است – Blocked by Windows Parental Controls");
    }
    else if (statusCode === 551) {
        toast.error("تغییر مسیر – Redirect");
    }
    else if (statusCode === 498) {
        toast.error("نامعتبر است – Invalid Token");
    }
    else if (statusCode === 499) {
        toast.error("کد مورد نیاز است – Token Required یا درخواست به وسیله‌ی آنتی‌ویروس‌ها ممنوع شده است – Request has been forbidden by antivirus");
    }
    else if (statusCode === 509) {
        toast.error("پهنای باند بیش از حد مجاز است – Bandwidth Limit Exceeded");
    }
    else if (statusCode === 530) {
        toast.error("سایت متوقف شده است – Site is frozen");
    }
}
export default HttpDefaultMessage