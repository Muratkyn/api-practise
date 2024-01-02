
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