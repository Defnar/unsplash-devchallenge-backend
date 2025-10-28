import "dotenv/config"
import e from "express"

const app = e();
const port = process.env.PORT || 8000;


app.use(e.json());
app.use(
    cors({
        origin: process.env.ORIGIN,
        credentials: true
    })
)

