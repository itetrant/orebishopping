import slugify from 'slugify';

// Function to remove Vietnamese diacritics
const removeVietnameseDiacritics = (str) => {
    str = str.toLowerCase();
    // Remove Vietnamese diacritics
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    // Remove combining diacritical marks
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // huyền, sắc, ngã, hỏi, nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
    // Replace spaces and special characters with dashes
    str = str.replace(/[^a-zA-Z0-9]/g, " ");
    str = str.replace(/\s+/g, "-");
    // Trim extra dashes from start and end of string
    str = str.replace(/^-+/g, "");
    str = str.replace(/-+$/g, "");
    return str;
};

// Function to generate slug from title
const slug = (title) => {
    try {
        const cleanedTitle = removeVietnameseDiacritics(title);
        const slug = slugify(cleanedTitle, { lower: true, remove: /[*+~.()'"!:@]/g });
        return slug;
    } catch (e) {
        console.error("Error generating slug:", e);
        return title; // Return original title if error occurs
    }
};

export default slug;
