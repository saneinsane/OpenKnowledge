import moment from "moment";

export function remainingTime(originalDate) {
  const endDate = moment(originalDate);
  const currentDate = moment();
  let _remainingTime = endDate.diff(currentDate, 'days');
  let remainingSeconds = endDate.diff(currentDate, 'seconds');
  const sameDay = endDate.isSame(currentDate, 'days');
  _remainingTime = parseFloat(_remainingTime + 1);
  if (_remainingTime > 1) {
    return 'Endet in ' + _remainingTime + ' Tagen';
  } else if (_remainingTime === 1 && !sameDay) {
    return 'Endet morgen um ' + endDate.format('HH:mm') + ' Uhr';
  } else if (_remainingTime <= 1 && (!sameDay || (sameDay && remainingSeconds < 0))) {
    return 'Endete am ' + endDate.format('DD.MM.YYYY, HH:mm') + ' Uhr';
  } else {
    return 'Endet heute um ' + endDate.format('HH:mm') + ' Uhr';
  }
}
