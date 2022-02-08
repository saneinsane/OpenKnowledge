import moment from "moment";

export function remainingTime(originalDate) {
  const endDate = moment(originalDate);
  const currentDate = moment();
  const dateDiff = endDate.clone().startOf('day')
    .diff(currentDate.clone().startOf('day'), 'days')
  if (dateDiff > 1) {
    return 'Endet in ' + dateDiff + ' Tagen';
  } else if (dateDiff === 1) {
    return 'Endet morgen um ' + endDate.format('HH:mm') + ' Uhr';
  } else if (endDate.isBefore(currentDate)) {
    return 'Endete am ' + endDate.format('DD.MM.YYYY, HH:mm') + ' Uhr';
  } else {
    return 'Endet heute um ' + endDate.format('HH:mm') + ' Uhr';
  }
}
