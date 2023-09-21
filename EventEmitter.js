const eventEmitter = require('events')

const event = new eventEmitter()
event.on('start', (name, id) =>
{
    console.log(`Started the event of ${name} with id: ${id} `)
})
event.on('start', () =>
{
    console.log('Started the event second time')
})

event.emit('start', 'shameer', 21)