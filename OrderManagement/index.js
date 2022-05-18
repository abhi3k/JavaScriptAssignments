let step1 = document.getElementById('odr1')
let step2 = document.getElementById('odr2')
let step3 = document.getElementById('odr3')
let step4 = document.getElementById('odr4')
let step5 = document.getElementById('odr5')
let step6 = document.getElementById('odr6')
let step7 = document.getElementById('odr7')
let step8 = document.getElementById('odr8')
let step9 = document.getElementById('odr9')
let step10 = document.getElementById('odr10')

let odrStatus = document.getElementById('head2')

let allOrder = document.getElementsByClassName('status-block')

const addClassDone = (index) =>  allOrder[index].classList.add('done')

const executeOrder = (callback) => {
    const orderNo = document.getElementById('order-id-input').value
    let x = 0
    odrStatus.innerHTML = 'Order status of : ' + orderNo
    odrStatus.style.display = 'block'
    // console.log('order placed')
    setTimeout(() => {
        // step1.style.display = 'block'
        addClassDone(x++)
        console.log('Chef received the order and started preparing')

        setTimeout(() => {
            addClassDone(x++)
            console.log('pizza sauce added')

            setTimeout(() => {
                addClassDone(x++)
                console.log('first layer of cheese added')

                setTimeout(() =>{
                    addClassDone(x++)
                    console.log('Toppings added')

                    setTimeout(() => {
                        addClassDone(x++)
                        console.log('Second layer of cheese added')

                        setTimeout(() => {
                            addClassDone(x++)
                            console.log('pizza baked')

                            setTimeout(() => {
                                addClassDone(x++)
                                console.log('Oregano added and packed')

                                setTimeout(() => {
                                    addClassDone(x++)
                                    console.log('package received on the conter')
                                    
                                    setTimeout(() => {
                                        addClassDone(x++)
                                        console.log('package received on the conter')
                                        callback()   
                                    }, 2000)

                                }, 2000)

                            }, 8000)

                        }, 15000)

                    },5000)

                }, 12000)

            }, 5000)

        },10000)

    }, 2000)
}  