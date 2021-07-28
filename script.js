// console.log('Start')
// console.log('Start2')
// window.setTimeout(function () {
//     console.log('Start after 2000 ms timeout')
// })

//************************************************************************** */

// console.log('Request to server...')

// setTimeout(() => {
//     console.log('Preparing data...')

//     setTimeout(() => {
//         backData = {
//             server: '1.1.1.1',
//             protocol: 'tcp',
//             port: 2024
//         }
//         console.log(`Server: ${backData.server} | Protocol: ${backData.protocol} | Port: ${backData.port}`)
//     }, 2000)

//     setTimeout(() => {
//         console.log('End session...')
//     }, 2000)
// }, 2000)

//********************************************************************** */

// console.log('Request to server...')
// p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Preparing data...')
//         backData = {
//             server: '1.1.1.1',
//             protocol: 'tcp',
//             port: '2021',
//             modified: true
//         }
//         resolve(backData)
//     }, 2000)
// }).then(() => {
//     console.log(`Recieved answer: Server:${backData.server} | Protocol:${backData.protocol} | Port:${backData.port} isModifief ${backData.modified}`)
//     return new Promise((resolve, reject) => {
//         console.log('Cheking recieved data...')
//         setTimeout(() => {
//             if(backData.modified) {
//                 err = 'Data had been modify!!!'
//                 reject(err)
//             }
//             else {
//                 resolve()
//             }
//         })
//     })
// }).then(() => {
//     console.log('Data check finished')
// })
// .catch( err => {
//     console.error('Error', err)
// }).finally(() => {
//     console.log('Session had been closed')
// })

const sleep = ms => {
    return new Promise((resolve) => {
        setTimeout(() => {resolve()}, ms);
    })
}

sleep(2000).then(() => {console.log('After 2sec')})
sleep(1000).then(() => {console.log('After 1sec')})

Promise.all([sleep(1000), sleep(4000), sleep(5000)])
.then(() => {
    console.log('All promises done')
})

Promise.race([sleep(2000), sleep(3000)])
.then(() => {
    console.log('Race promise')
})