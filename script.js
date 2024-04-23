//Complete this JS file to render the post1 on the screen with all the specified tags.
// let post1 ={
//     id: 1, 
//     author: 'John',
//     content: 'My first Post!', 
//     likes: 10, 
//     comments: ['Great post!', 'Nice photo!'], 
//     image: 'https://files.codingninjas.in/image2-28694.jpg' };

//     //destructuring the object
//     const {id,author,content,likes,comments,image} =  post1;

//     const postsEl= document.getElementByClass("posts-container")

//     const postEl = document.createElement("div");
//     postEl.className= "post" ;
    
//     postsEl.appendChild("postEl")

//     const hEl = document.create("h3");
//     hEl.textContext= author;
//     postEl.appendChild(hEl)

//     const imageEl = document.create("img");
//     imageEl.src = image;
//     postEl.appendChild(imageEl)


//     const pEl = document.create("p");
//     pEl.textContext = content;
//     postEl.appendChild(pEl)

//     const buttonEl = document.createElement("button")
//     buttonEl.textContent = likes;
//     postEl.appendChild(buttonEl)

//     const inputEl = document.create("input")
//     inputEl.textContent= type
//     postsEl.appendChild(inputEl)

//     const buttonEle = document.create("button")
//     buttonEle.textContent= comments
//     postEl.appendChild(buttonEle)

//     const footer = document.create("div")
//     footer.class= "post footer";
//     footer.textContent= `Likes: ${post1.likes} Comments: ${post1.comments.length}`
//     postEl.appendChild(footer);
    

//     const commentEl = document.create("div");
//     commentEl.class="comments-container";
//     commentEl.value= "";
//     postEl.appendChild(commentEl)

    
        
//     comments.forEach((comment) =>{
//         const p = document.createElement("p")
//         p.textContent= comment;
//         commentEl.appendChild(p);

//     })
//       footer.addEventListener("click", clickDiv
//       )
//       function clickDiv(value){
        
       let post1 =
        { id: 1, author: 'John', content: 'My first Post!', likes: 10, comments: ['Great post!', 'Nice photo!'], image: 'https://files.codingninjas.in/image2-28694.jpg' };
     
    function renderPosts() {
        const postsContainer = document.getElementById('posts');
        postsContainer.innerHTML = '';
      
    
          const postElement = document.createElement('div');
          postElement.classList.add('post');
      
          const authorElement = document.createElement('h3');
          authorElement.textContent = post1.author;
      
          const contentElement = document.createElement('p');
          contentElement.textContent = post1.content;
      
          const imageElement = document.createElement('img');
          imageElement.src = post1.image;
          imageElement.alt = 'Post Image';
      
          const likeButton = document.createElement('button');
          likeButton.textContent = `Like`;
    
          const commentInput = document.createElement('input');
          commentInput.type = 'text';
          commentInput.placeholder = 'Write a comment...';
      
          const commentButton = document.createElement('button');
          commentButton.textContent = 'Comment';
      
          const postFooter = document.createElement('div');
          postFooter.classList.add('post-footer');
          postFooter.textContent = `Likes: ${post1.likes}   Comments: ${post1.comments.length}`;
      
          const commentsContainer = document.createElement('div');
          commentsContainer.classList.add('comments-container');
          commentsContainer.style.display = 'none';
      
          post1.comments.forEach((comment) => {
            const commentElement = document.createElement('p');
            commentElement.textContent = comment;
            commentsContainer.appendChild(commentElement);
          });
      
          postElement.appendChild(authorElement);
    
          postElement.appendChild(imageElement);
          postElement.appendChild(contentElement);
          postElement.appendChild(likeButton);
          postElement.appendChild(commentInput);
          postElement.appendChild(commentButton);
          postElement.appendChild(postFooter);
          postElement.appendChild(commentsContainer);
      
          postFooter.addEventListener('click', () => {
            if (commentsContainer.style.display === 'none') {
              commentsContainer.style.display = 'block';
            } else {
              commentsContainer.style.display = 'none';
            }
          });
      
          postsContainer.appendChild(postElement);
        }
    
     renderPosts();
    
    
    
    
    