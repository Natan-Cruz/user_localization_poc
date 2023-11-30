import express from "express";
import { writeFileFS, readFileFS } from "./fs-utils.js";

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
    try {
        const file = await readFileFS("src/index.html", "utf8");

        res.status(200).send(file);
    } catch (error) {
        console.error(error)
        res.status(400).send("Error");
    }
})

app.post("/save-data", async (req, res) => {
    try {
        await writeFileFS("output/location.json", JSON.stringify(req.body), "utf8")        

        res.status(201).send("OK")
    } catch (error) {
        console.error(error);
        res.status(404).send("Error")
    }
})

;(async () => {
    try {
        await writeFileFS("output/location.txt", "oi", "utf8")        
    } catch (error) {
        console.error(error);
    }
})();


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server rodando na porta: ${PORT}`)
})