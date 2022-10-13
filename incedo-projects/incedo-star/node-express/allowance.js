class Allowance {

    constructor(name,sapid,projectHours,holidayLeaveHours,afternoonShiftDays,nightShiftDays,dayEligibleForTA,
        transportAllowance,totalAllowance){
        this.name=name;
        this.sapid=sapid;
        this.projectHours=projectHours;
        this.holidayLeaveHours=holidayLeaveHours;
        this.afternoonShiftDays=afternoonShiftDays;
        this.nightShiftDays=nightShiftDays;
        this.dayEligibleForTA=dayEligibleForTA;
        this.transportAllowance=transportAllowance;
        this.totalAllowance=totalAllowance;
    }

}

module.exports = Allowance;