function MyDate(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
    this.getDay = function () {
        return this.day;
    }
    this.getMonth = function () {
        return this.month;
    }
    this.getYear = function () {
        return this.year;
    }
    this.setDay = function (day) {
        this.day = day;
    }
    this.setMonth = function (month) {
        this.month = month;
    }
    this.setYear = function (year) {
        this.year = year;
    }
    this.setDate = function (day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
    this.toString = function () {
        return this.day + '/' + this.month + '/'+this.year;
    }
}

let date = new MyDate(2, 3, 2020);
alert(date.getDay() + " / " + date.getMonth() + " / " + date.getYear());

date.setDay(14);
date.setMonth(2);
date.setYear(2020);
alert(date.getDay() + " / " + date.getMonth() + " / " + date.getYear());

date.setDate(18, 7, 2020);
alert(date.toString());