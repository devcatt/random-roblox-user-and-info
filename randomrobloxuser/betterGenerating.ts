let fetchlink: string = "https://users.roblox.com/v1/users/"
let randomID: number = Math.floor(Math.random() * 7737784538)

function getRandomUser() { 
    fetchlink += String(randomID)
    console.log(fetchlink)
}

function fetchUser() {
    getRandomUser()
    
    fetch(fetchlink).then(response => response.json()).then(async data => {
        if (data.errors) {
            console.error("something went wrong")
        }
        console.log(`display name: ${data.displayName}`)
        console.log(`username: ${data.name}`)
        console.log(`banned: ${data.isBanned}`)
    })
}



function getFriends() {
    fetchUser()
    
    try {
        fetch(`https://friends.roblox.com/v1/users/${randomID}/friends/count`).then(response => response.json()).then(data => {
            if (data.count > 0) {
                console.log(`amount of friends: ${data.count}`)
            } else if (data.count == 0) {
                console.log("user doesn't have friends")
            }
        })
    }
    catch (error) {console.error(error)}
}

getFriends()
