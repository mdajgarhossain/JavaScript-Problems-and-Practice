// Problem- 16: Blog Post Object

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

console.log(blogPost);
console.log(blogPost.body);
console.log(blogPost.comments[0].body);
