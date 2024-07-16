const getTheTitles = function(data) {
    if (!data) return;
    const titlesArray = [];
    for (const entry of data){
        titlesArray.push(entry?.title);
    }
    return titlesArray;
};

// Do not edit below this line
module.exports = getTheTitles;
