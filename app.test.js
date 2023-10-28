const User = require('./scr/User')

// 
describe ('The User Class', () => {
  test('Can creat New User Instance', () => {
    const user = new User('bob23', 'first01', 23)
    expect(user.username).toBe('bob23')
    expect(user.password).toBe('fist01')
    expect(user.age).toBe(23)
  })
  test('Can only login with password', () => {
    const user = new User('smith07', 'w0nder25', 34)
    user.loggedIn('w0nder25')
    expect(user.loggedIn()).toBe('w0nder25')
    })
})

const Scooter = require('./scr/Scooter')