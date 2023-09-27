// Async-JS

// Call backs : 

// these were used prior to ES6 which now uses promises 





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

function createPost(post, callback){
    setTimeout(()=> {
        posts.push(post);
        callback();
    }, 2000);
}


CreatePost({title: 'Post Three', body: 'This is post three'},getPosts);



// promises: 



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


        createPost({title: 'Post Three', body: 'This is post three'});
.then(getPosts);
