// 게시글 목록을 가져오는 함수
function fetchPosts(page = 1) {
    fetch(`https://your-glitch-project-name.glitch.me/getPosts?page=${page}`)
        .then(response => response.json())
        .then(data => {
            const postsList = document.querySelector('#posts-list');
            postsList.innerHTML = '';  // 기존 내용 지우기

            // 게시글을 화면에 표시
            data.posts.forEach((post, index) => {
                const postElement = document.createElement('div');
                postElement.className = 'post';
                postElement.innerHTML = `
                    <div class="post-item">
                        <p class="post-number">${index + 1}</p>
                        <a href="/게시글/${post.id}" class="post-title">${post.title}</a>
                        <p class="post-date">${post.date}</p>
                    </div>
                `;
                postsList.appendChild(postElement);
            });

            // 페이지네이션 처리
            const pagination = document.querySelector('#pagination');
            pagination.innerHTML = '';

            const totalPosts = data.totalPosts;
            const postsPerPage = 20;
            const totalPages = Math.ceil(totalPosts / postsPerPage);

            for (let i = 1; i <= totalPages; i++) {
                const pageLink = document.createElement('a');
                pageLink.href = `/?page=${i}`;
                pageLink.textContent = i;
                pagination.appendChild(pageLink);
            }
        });
}

// 페이지 로드 시 게시글 목록을 가져오기
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const page = parseInt(urlParams.get('page')) || 1;
    fetchPosts(page);
});
