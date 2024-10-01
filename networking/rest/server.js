import express, { response } from 'express';

const app = express();

app.use(express.json());
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`app running successfully on ${PORT}`);
});

let data = [
    {
        "id": "101",
        "title": "Book1",
        "author": "ABC"
    },
    {
        "id": "102",
        "title": "Book2",
        "author": "DEF"
    }
]

// GET
app.get("/api/book-data", (req, res) => {
    res.json(data);
});

// POST
app.post("/api/book-data", (req, res) => {
    const body = req.body;
    data = [
        ...data,
        body
    ]
    res.json(response);
});

// PUT
app.put("/api/book-data/:id", (req, res) => {
    const body = req.body;
    const id = req.params.id;
    data = data.map((el) => {
        if(el.id == id) {
            return {
                id,
                ...body
            }
        }
        return el;
    })
    res.json(response);
});

// DELETE
app.delete("/api/book-data/:id", (req, res) => {
    const id = req.params.id;
    data = data.filter((el) => el.id != id)
    res.json(response);
});

