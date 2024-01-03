
const btnHandler = document.querySelector('.btn')

const clickHandler = () => {

    const dataFetcher = () => {
        fetch('https://reqres.in/api/users')
            .then(res => {
                if(!res.ok) {  //guard clause//
                    console.log("somethign went wrong")
                    return;
                }
               return res.json()
            }).then(data => {
                console.log(data.data[3].first_name)
            }).catch(error => {
                console.log('error occured', error)
            })
    }
    dataFetcher()
}
btnHandler.addEventListener('click', clickHandler)

//syntactical sugar///
const fetchData = async () => {
    try {
        const res = await fetch('http//regres.in/api/users')
        if (!res.ok) {
            console.log("Something went wrong!!!")
            return;
        }
        const data = await res.json()
        console.log(data)

    } catch (error) {
        console.log(error)
    }
}
// traditional .then method//
    