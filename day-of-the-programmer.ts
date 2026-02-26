const PROGRAMMER_DAY = 256;

const isJulianLeap = (year: number): boolean =>
    year % 4 === 0;

const isGregorianLeap = (year: number): boolean =>
    year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);

const formatDate = (day: number, month: number, year: number): string => {
    const dd = String(day).padStart(2, '0');
    const mm = String(month).padStart(2, '0');
    return `${dd}.${mm}.${year}`;
};

function dayOfProgrammer(year: number): string {
    if (year === 1918) {
        const daysBeforeSep1918 = 31 + 14 + 31 + 30 + 31 + 30 + 31 + 31;
        const day = PROGRAMMER_DAY - daysBeforeSep1918;
        return formatDate(day, 9, year);
    }

    const isLeap = year < 1918
        ? isJulianLeap(year)
        : isGregorianLeap(year);

    const daysBeforeSeptember = isLeap ? 244 : 243;
    const day = PROGRAMMER_DAY - daysBeforeSeptember;

    return formatDate(day, 9, year);
}

console.log(dayOfProgrammer(2028))