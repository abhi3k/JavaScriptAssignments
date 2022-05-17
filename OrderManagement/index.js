const executeOrder = (callback) => {
    const orderNo = document.getElementById('order-id-input')
    console.log('order placed')
    setTimeout(() => {
        console.log('Chef received the order and started preparing')

        setTimeout(() => {
            console.log('pizza sauce added')

            setTimeout(() => {
                console.log('first layer of cheese added')

                setTimeout(() =>{
                    console.log('Toppings added')

                    setTimeout(() => {
                        console.log('Second layer of cheese added')

                        setTimeout(() => {
                            console.log('pizza baked')

                            setTimeout(() => {
                                console.log('Oregano added and packed')

                                setTimeout(() => {
                                    console.log('package received on the conter')
                                    
                                    setTimeout(() => {
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