// // Async-JS

// // Call backs : 

// // these were used prior to ES6 which now uses promises 





// const post = [
//     {title: 'Post One', body: 'This is post one'}, 
//     {title: 'Post Two', body: 'This is post two'}, 
// ];

// function getPosts(){

//     setTimeout(()=>{
//         let output = '';
//         posts.forEach((post, index) => {
//                 output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
//     }

// function createPost(post, callback){
//     setTimeout(()=> {
//         posts.push(post);
//         callback();
//     }, 2000);
// }


// CreatePost({title: 'Post Three', body: 'This is post three'},getPosts);



// // promises: 



const post = [
    {title: 'Post One', body: 'This is post one'}, 
    {title: 'Post Two', body: 'This is post two'}, 
];

function getPosts(){

    setTimeout(()=>{
        let output = '';
        posts.forEach((post, index) => {
                output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
    }

function createPost(post){
    return a new Promise((resolve,reject) =>{
    setTimeout(()=> {
        posts.push(post);
        const error = false; 

        if(!error){
            resolve();
        }else{
            reject('Error: Something went wrong');
        }
        
    }, 2000);
}


// createPost({title: 'Post Three', body: 'This is post three'});
//         .then(getPosts);
//         .catch(err => console.log(err));

//         Promise.all
//         const promise1 = Promise.resolve('Hello World');
//         const promise = 10;
//         const promise3 = new Promise((resolve,reject);

//         setTimeout(resolve, 2000, 'Goodbye'));
// const promise4 = fetch('url').then(res => res.json);
//         Promise.all([promise1,promise2,promise3,promise4]).then((values) => console.log(values));

// Async / await

// async function init(){
//     await createPost({title: 'Post Three', body: 'This is post three'});
//     getPosts();
// }
// init();
 // Async / Await / Fetch
  async function fetchUsers () {

const res = await fetch
('https://jsonplaceholder.typicode.com/users');


const data = await res. json () ;


console. log (data);
 }

 fetchUsers();
 



// How to use promises: 

// Promise Basics:
// Promises are objects that represent a future value or the eventual completion (or failure) of an asynchronous operation.
// Promises have three states: Pending, Fulfilled (resolved), and Rejected.
// You create a promise using the Promise constructor, which takes a function with two parameters: resolve and reject.
// javascript
// 
// const myPromise = new Promise((resolve, reject) => {
//   // Asynchronous operation
//   // If successful, call resolve(value)
//   // If an error occurs, call reject(error)
// });
// Promise Chaining:
// Promises can be chained using .then() to execute code once the promise is resolved, and .catch() to handle errors.
// This chaining makes it easier to manage asynchronous code in a more readable and maintainable way.
// javascript
// 
// myPromise
//   .then((result) => {
//     // Handle the successful result
//   })
//   .catch((error) => {
//     // Handle any errors
//   });

// 