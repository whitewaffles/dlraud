function submitPost() {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    
    if (title === "" || content === "") {
        alert("제목과 내용을 입력해주세요.");
        return;
    }

    const date = new Date().toISOString();

    fetch("/addPost", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, content, date })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("게시글이 등록되었습니다.");
            window.location.href = "/index.html";  // 게시글 목록 페이지로 이동
        } else {
            alert("게시글 등록에 실패했습니다.");
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("오류가 발생했습니다.");
    });
}
