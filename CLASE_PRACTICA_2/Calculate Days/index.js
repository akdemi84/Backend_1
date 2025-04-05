import moment from "moment";

const calculateDays = (newBirthday) => {
    const now = moment()
    
    const birthDay = moment(newBirthday, "DD-MM-YYYY")

    const days =  now.diff(birthDay, "days")
    const years =  now.diff(birthDay, "years")


    return days
}

console.log(calculateDays("06/05/1984"))
console.log(calculateDays("06/05/1984"))