document.getElementById('submitBtn').addEventListener('click', async function () {
    const submitBtn = document.getElementById('submitBtn');
    
    // 버튼 비활성화
    submitBtn.disabled = true;
    submitBtn.textContent = '등록 중...'; // 버튼 텍스트 변경 (옵션)

    const title = document.querySelector('.wpahr').value;  // 제목 입력 값
    const content = document.querySelector('.sodyd').value;  // 내용 입력 값
    const date = new Date().toISOString();  // 현재 날짜와 시간

    const postData = { title, content, date };

    try {
        const response = await fetch('https://synonymous-detailed-buffer.glitch.me/addPost', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postData)
        });

        const result = await response.json();
        if (result.message) {
            alert('게시글이 등록되었습니다!');
            window.location.href = '/';  // 성공 시 메인 페이지로 이동
        } else {
            alert('게시글 등록에 실패했습니다.');
        }
    } catch (error) {
        console.error('에러 발생:', error);
        alert('네트워크 에러가 발생했습니다.');
    } finally {
        // 버튼 활성화 (필요한 경우)
        submitBtn.disabled = false;
        submitBtn.textContent = '게시'; // 버튼 텍스트 원래대로
    }
});
