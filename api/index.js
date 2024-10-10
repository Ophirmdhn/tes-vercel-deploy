import express from "express"

const app = express()

app.get("/", (req, res) => {
    res.send("VERCEL DEPLOY")
})

// app.listen(5000, () => {
//     console.log(`SERVER RUN DI PORT 5000`)
// })

export default app