const doctorInfo = function (doctorName, specialty, address) {
    return {
        "name": doctorName,
        "specialty": specialty,
        "address": address

    }
}

const thisDoctor = doctorInfo("Doctor Mueller", "Psychiatry", "123 This Place")

console.log(thisDoctor)