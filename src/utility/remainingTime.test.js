import {remainingTime} from "./remainingTime";


describe('remainingTime', () => {
  test('it should handle today’s times', () => {
    Date.now = jest.fn(() => new Date('2020-05-13T12:33:37.000Z').getTime())
    const in2Hours = new Date('2020-05-13T14:33:37.000Z')
    expect(remainingTime(in2Hours))
      .toEqual(`Endet heute um 16:33 Uhr`)
  })

  test('it should handle dayAfterTomorrow times', () => {
    // jest.spyOn(Date, 'now').mockImplementation(() => {
    //   return new Date('2020-05-13T12:33:37.000Z')
    // });
    jest
      .useFakeTimers()
      .setSystemTime(new Date('2020-05-13T12:33:37.000Z').getTime());
    let dayAfterTomorrow = new Date('2020-05-15T12:33:36.999Z');
    expect(remainingTime(dayAfterTomorrow))
      .toEqual(`Endet in 2 Tagen`)
  })
})
