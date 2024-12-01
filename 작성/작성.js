document.getElementById('submitBtn').addEventListener('click', async function () {
    const title = document.querySelector('.wpahr').value;
    const content = document.querySelector('.sodyd').value;
    const date = new Date().toISOString();  // 현재 날짜와 시간을 ISO 형식으로 생성

    const postData = { title, content, date };

    const response = await fetch('https://synonymous-detailed-buffer.glitch.me/addPost', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData)
    });

    const result = await response.json();
    if (result.message) {
        alert('게시글이 등록되었습니다!');
        window.location.href = '/';  // 글 등록 후 index.html로 이동
    } else {
        alert('게시글 등록에 실패했습니다.');
    }
});
