function startOfDay(date) {
	return new Date(
		date.getFullYear(),
		date.getMonth(),
		date.getDate()
	);
}

function isValidDate(date) {
	return date instanceof Date && !Number.isNaN(date.getTime());
}

function addYears(date, years) {
	const result = new Date(date);

	result.setFullYear(result.getFullYear() + years);

	// Handle February 29 in non-leap years.
	if (result.getMonth() !== date.getMonth()) {
		result.setDate(0);
	}

	return result;
}

function calculateAge(dateOfBirth, asOfDate = new Date()) {
	const birthDate = startOfDay(new Date(dateOfBirth));
	const currentDate = startOfDay(new Date(asOfDate));

	if (!isValidDate(birthDate) || !isValidDate(currentDate)) {
		throw new Error('Invalid date');
	}

	if (birthDate > currentDate) {
		throw new Error('Date of birth cannot be in the future');
	}

	let years = currentDate.getFullYear() - birthDate.getFullYear();

	let birthdayThisYear = addYears(birthDate, years);

	if (birthdayThisYear > currentDate) {
		years -= 1;
		birthdayThisYear = addYears(birthDate, years);
	}

	const remainingStart = birthdayThisYear;

	let months = 0;
	let monthDate = new Date(remainingStart);

	while (true) {
		const nextMonth = new Date(monthDate);
		nextMonth.setMonth(nextMonth.getMonth() + 1);

		if (nextMonth <= currentDate) {
			months += 1;
			monthDate = nextMonth;
		} else {
			break;
		}
	}

	const millisecondsPerDay = 24 * 60 * 60 * 1000;
	const days = Math.floor(
		(currentDate - monthDate) / millisecondsPerDay
	);

	const totalDays = Math.floor(
		(currentDate - birthDate) / millisecondsPerDay
	);

	const totalMonths = years * 12 + months;
	const totalWeeks = Math.floor(totalDays / 7);

	const nextBirthday = addYears(
		birthDate,
		years + 1
	);

	const daysUntilNextBirthday = Math.ceil(
		(nextBirthday - currentDate) / millisecondsPerDay
	);

	return {
		years,
		months,
		days,
		totalMonths,
		totalWeeks,
		totalDays,
		nextBirthday,
		daysUntilNextBirthday
	};
}

export {
	calculateAge
};