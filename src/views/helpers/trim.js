const preview = (str) => {

    let preveiw = str.replace(/(&nbsp;)|(<[^>]*>)/g, "");
    return preveiw.substring(0, 200) + ' ...';
};

module.exports = preview;