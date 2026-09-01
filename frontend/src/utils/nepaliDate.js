import NepaliDate from 'nepali-date-converter';

const NEPALI_DAYS = [
	'आइतबार',
	'सोमबार',
	'मंगलबार',
	'बुधबार',
	'बिहिबार',
	'शुक्रबार',
	'शनिबार'
];

export function bsToAd(year, month, day) {
	const date = new NepaliDate(year, month - 1, day);
	const result = date.getAD();

	const englishDate = new Date(
		Date.UTC(result.year, result.month, result.date)
	);

	return {
		year: result.year,
		month: result.month + 1,
		day: result.date,
		dayOfWeek: englishDate.toLocaleDateString('en-US', {
			weekday: 'long',
			timeZone: 'UTC'
		})
	};
}

export function adToBs(year, month, day) {
	const date = new NepaliDate(
		new Date(Date.UTC(year, month - 1, day))
	);

	const result = date.getBS();

	const englishDate = new Date(
		Date.UTC(year, month - 1, day)
	);

	return {
		year: result.year,
		month: result.month + 1,
		day: result.date,
		dayOfWeek: NEPALI_DAYS[englishDate.getUTCDay()]
	};
}