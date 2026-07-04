const users = [
    {
        name: "Jane Doe",
        gender: "Female",
        image: "./images/jane.png"
    },
    {
        name: "John Doe",
        gender: "Male",
        image: "./images/john.png"
    }
];

let curUserId = 0;

function toggle() {

    curUserId = (curUserId + 1) % users.length;

    document.getElementById("img").src = users[curUserId].image;

    document.getElementById("card-name").innerText =
        users[curUserId].name;

    document.getElementById("card-gender").innerText =
        users[curUserId].gender;
}

console.log("Hello from JavaScript");