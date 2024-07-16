// Example fetch request to fetch posts
fetch('/api/posts')
    .then(response => response.json())
    .then(posts => {
        // Manipulate DOM to display fetched posts
        const postsContainer = document.querySelector('.posts-container');

        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <h2 class="post-title">${post.title}</h2>
                <p class="post-body">${post.body}</p>
            `;
            postsContainer.appendChild(postElement);
        });
    })
    .catch(error => console.error('Error fetching posts:', error));
