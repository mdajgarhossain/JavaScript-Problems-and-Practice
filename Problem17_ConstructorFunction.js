//Problem - 17: Constructor Function
const blogPost = {
    title: 'My Personal Blog',
    body: `I am a JavaScript developer. I have completed these following courses:
1. ES5,
2. ES6,
3. OOP in JavaScript,
So, What's next...`,
    author: 'MD. Ajgar Hossain',
    views: 3050,
    comments: [
        {author: 'user', body: `Comments: Next is React`},
        {author: 'user', body: `Comments: Next is NodeJS`}
    ],
    isLive: true
};


//create the blogPost object with constructor::::::::
function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

const blog = new Post('My Personal Blog', 'body', 'user');
console.log(blog);

