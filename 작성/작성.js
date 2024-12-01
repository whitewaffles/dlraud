document.getElementById('postForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const title = e.target.title.value;
    const content = e.target.content.value;
    const date = new Date().toISOString();  // 작성 날짜

    const postData = {
        title: title,
        content: content,
        date: date
    };

    try {
        const response = await fetch('https://synonymous-detailed-buffer.glitch.me/addPost', {  // Glitch 서버 URL로 수정
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData)
        });

        if (!response.ok) {
            throw new Error('Failed to add post');
        }

        const result = await response.json();
        alert('게시글이 추가되었습니다!');
        console.log(result);
    } catch (error) {
        console.error(error);
        alert('게시글 추가 실패');
    }
});
