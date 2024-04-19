let data = [{
    name : "Waleed",
    age : 19,
    class : "13"
},
{
    name : "Maleeha",
    age : 19,
    class : "13"
},

{
    name : "Areeba",
    age : 19,
    class : "13"
},

{
    name : "Waleed",
    age : 19,
    class : "13"
},
]


let myBox = document.getElementsByClassName("main")[0];

let html = "";

data.forEach((element)=>{
    html += `
    <div class="box">
                <h2>Name : <span>${element.name}</span></h2>

                <h3>Age : <span>${element.age}</span></h3>

                <h3>Class : <span>${element.class}</span></h3>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero consectetur odit eligendi fugit nobis ut delectus reiciendis voluptatum doloribus, accusamus itaque totam doloremque, atque tempore. Dicta laboriosam minus placeat autem.</p>
            </div>
    
    `
    console.log(element);
})

myBox.innerHTML = html


document.title = "Student Record App"
