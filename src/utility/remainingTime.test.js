import {remainingTime} from "./remainingTime";

beforeAll(() => {
  jest
    .useFakeTimers()
    .setSystemTime(new Date('2020-05-20T08:38:00.000Z').getTime());
  // Date.now = jest.fn(() => new Date('2020-05-13T12:33:37.000Z').getTime())
})

describe('remainingTime: ends today', () => {
  test('it should handle now', () => {
    const now = new Date('2020-05-20T08:38:00.000Z')
    expect(remainingTime(now))
      .toEqual(`Endet heute um 08:38 Uhr`)
  })

  test('it should handle +00:01', () => {
    const inOneSecond = new Date('2020-05-20T08:38:01.000Z')
    expect(remainingTime(inOneSecond))
      .toEqual(`Endet heute um 08:38 Uhr`)
  })

  test('it should handle 23:59 today', () => {
    const endOfToday = new Date('2020-05-20T23:59:59.000Z')
    expect(remainingTime(endOfToday))
      .toEqual(`Endet heute um 23:59 Uhr`)
  })
})

describe('remainingTime: ends tomorrow', () => {
  test('it should handle 00:00 tomorrow', () => {
    let startOfTomorrow = new Date('2020-05-21T00:00:00.000Z');
    expect(remainingTime(startOfTomorrow))
      .toEqual(`Endet morgen um 00:00 Uhr`)
  })

  test('it should handle 23:59 tomorrow', () => {
    let endOfTomorrow = new Date('2020-05-21T23:59:59.000Z');
    expect(remainingTime(endOfTomorrow))
      .toEqual(`Endet morgen um 23:59 Uhr`)
  })
})

describe('remainingTime: day after tomorrow', () => {
  test('it should handle 00:00 day after tomorrow', () => {
    let startOfDayAfterTomorrow = new Date('2020-05-22T00:00:00.000Z');
    expect(remainingTime(startOfDayAfterTomorrow))
      .toEqual(`Endet in 2 Tagen`)
  })

  test('it should handle 23:59 day after tomorrow', () => {
    let endOfTomorrow = new Date('2020-05-22T23:59:59.000Z');
    expect(remainingTime(endOfTomorrow))
      .toEqual(`Endet in 2 Tagen`)
  })
})

describe('remainingTime: ended today', () => {
  test('it should handle 00:00 today', () => {
    const startOfToday = new Date('2020-05-20T00:00:00.000Z')
    expect(remainingTime(startOfToday))
      .toEqual(`Endete heute um 00:00 Uhr`)
  })

  test('it should handle -00:01', () => {
    const oneSecondAgo = new Date('2020-05-20T08:37:59.000Z')
    expect(remainingTime(oneSecondAgo))
      .toEqual(`Endete heute um 10:37 Uhr`)
  })
})

describe('remainingTime: ended yesterday', () => {
  test('it should handle 00:00 yesterday', () => {
    const startOfYesterday = new Date('2020-05-19T00:00:00.000Z')
    expect(remainingTime(startOfYesterday))
      .toEqual(`Endete am 19.05.2020, 00:00 Uhr`)
  })

  test('it should handle 23:59 yesterday', () => {
    const endOfYesterday = new Date('2020-05-19T23:59:59.000Z')
    expect(remainingTime(endOfYesterday))
      .toEqual(`Endete gestern um 23:59 Uhr`)
  })
})
