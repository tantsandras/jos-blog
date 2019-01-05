const preview = (str) => {

    let preveiw = str.replace(/<[^>]*>/g, "");
    return preveiw.substring(0, 200) + ' ...';
};

module.exports = preview;