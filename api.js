
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
const dataFetcher = () => {
    fetch('http//regres.in/api/users')
        .then(res => {
            if(!res.ok) {  //guard clause//
                console.log("somethign went wrong")
                return;
            }
            res.json()
        }).then(data => {
            console.log(data)
        }).catch(error => {
            console.log(error)
        })
}
    