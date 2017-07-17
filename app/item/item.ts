export class Item {
  id: number;
  label: string;
  startDate: Date;
  numberOfMonths: number;

  constructor(id: number, label: string, startDate: Date, numberOfMonths: number) {
    this.id = id;
    this.label = label;
    this.startDate = startDate;
    this.numberOfMonths = numberOfMonths;
  }

  getMonthDiff(): string {
    var months;
    var now = new Date();
    months = (now.getFullYear() - this.startDate.getFullYear()) * 12;
    months -= this.startDate.getMonth() + 1;
    months += now.getMonth();
    var diff = months <= 0 ? 0 : months;
    return new Timespan(this.numberOfMonths - diff).toString();
  }
}

export class Timespan {
  months: number;
  // years: number;

  constructor(months: number) {
    // this.years = months / 12;
    // this.months = months % 12;
    this.months = months;
  }

  toString() {
    // if (this.years < 1) {
    //   return this.months + " months";
    // } else {
    //   return this.years + "." + (this.months / 12) + " years";
    // }
    return this.months.toString();
  }
}
