import container from './container'

describe('test container', () => {
  it('should throws an exception when not found on container', () => {
    expect(() => {
      container.get('anything')
    }).toThrow(Error)
  })

  it('should execute the excpected build function if the object was mapped into container', () => {
    const anything = jest.fn(() => new Object())
    container.register('anything', anything)
    const object = container.get('anything')

    expect(anything.mock.calls.length).toBe(1)
    expect(object).toBeInstanceOf(Object)
  })
})