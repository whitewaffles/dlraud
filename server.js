const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// 데이터베이스 연결
const db = new sqlite3.Database('./db/database.db');

// 게시글 추가
app.post("/addPost", (req, res) => {
    const { title, content, date } = req.body;
    db.run("INSERT INTO posts (title, content, date) VALUES (?, ?, ?)", [title, content, date], function(err) {
        if (err) {
            return res.json({ success: false });
        }
        res.json({ success: true });
    });
});

// 게시글 목록 가져오기
app.get("/getPosts", (req, res) => {
    const page = parseInt(req.query.page || 1);
    const offset = (page - 1) * 20;

    db.all("SELECT * FROM posts LIMIT 20 OFFSET ?", [offset], (err, rows) => {
        if (err) {
            return res.status(500).send("Error retrieving posts");
        }

        db.get("SELECT COUNT(*) AS count FROM posts", (err, count) => {
            res.json({ posts: rows, totalPosts: count.count });
        });
    });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
