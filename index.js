async function fetchPosts() {
    const response = await fetch('https://synonymous-detailed-buffer/getPosts');  // Glitch 서버 URL로 수정
    const posts = await response.json();
    const postsList = document.getElementById('posts-list');

    postsList.innerHTML = posts.map(post => `
        <div class="post">
            <p class="post-number">${post.id}</p>
            <a href="/posts/${post.id}" class="post-title">${post.title}</a>
            <p class="post-date">${new Date(post.date).toLocaleDateString()}</p>
        </div>
    `).join('');
}

fetchPosts();
