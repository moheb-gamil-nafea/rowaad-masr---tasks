async function getPosts() {
  const postsContainer = document.getElementById('posts-container');
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
      posts.forEach(post => {
      const postCard = document.createElement('div');
      postCard.className = 'col-md-4 mb-4';
      postCard.innerHTML = `
        <div class="card">
          <div class="card-body text-center ">
            <h5 class="card-title bg-dark text-light">${post.title}</h5>
            <h5 class="card-id bg-secondary text-warning text-center">${post.id}</h5>
            <p class="card-text">${post.body}</p>
            <a href="#" class="btn btn-warning">Read more</a>
          </div>
        </div>
      `;
      postsContainer.appendChild(postCard);
      }); 
    });  
}
getPosts();
