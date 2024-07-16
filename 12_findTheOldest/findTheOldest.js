const findTheOldest = function(data) {
    return data.reduce((a,b)=>{
        if (getAge(a)> getAge(b)) {
            return a;
        } else {
            return b;  
        }
    },data[0]);
};

const getAge = function(person){
    return (person.yearOfDeath || new Date().getFullYear()) - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
