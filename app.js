// const todos = document.querySelector("#todos");

// async function fetchtodo() {
//     console.log("начало");

//     try {
//         const respronse = await fetch("https://jsonplaceholder.typicode.com/todos");
//         const data = await reponse.json() ;
//         console.log(data, "данные пришли");
//         data.forEach((todo) => {
//             const div = document.createElement("div");
//             div.innerHTML = `
//                <div>
//                <h2>${to.title}</h2>
//                <p>${to.completed}</p>
//                </div>
//             `;
//             todos.appendChild(div);
//         });
//     } catch (error) {
//         console.error("ошибка", error.message);
        
//     }



// }