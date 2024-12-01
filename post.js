const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');

async function fetchPostDetails() {
    const response = await fetch(`https://synonymous-detailed-buffer.glitch.me/getPost/${postId}`);
    const post = await response.json();

    if (post.error) {
        document.getElementById('post-details').innerHTML = `<p>${post.error}</p>`;
        return;
    }

    document.getElementById('post-title').textContent = post.title;
    document.getElementById('post-date').textContent = new Date(post.date).toLocaleString();
    document.getElementById('post-content').textContent = post.content;
}

fetchPostDetails();
