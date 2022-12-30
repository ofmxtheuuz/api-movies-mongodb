import express, {Request, Response, NextFunction } from "express" 
import SMovie from "../models/SMovie";
const router = express.Router();

router.get("/", (req: Request, res: Response) => {
    SMovie.find().then(movies => {
        res.status(200).json({
            code: 200,
            content: movies
        })
    })
})

router.post("/add", (req: Request, res: Response) => {
    new SMovie({
        title: req.body.title,
        description: req.body.description,
        stars: req.body.stars
    }).save().then(() => {
        res.status(201).json({
            code: 201,
            status: "succefully saved"
        })
    })
})

router.get("/:id", (req: Request, res: Response) => {
    SMovie.findById(req.params.id).then(movie => {
        res.status(200).json({
            code: 200,
            content: movie
        })
    })
})

router.post("/:id", (req: Request, res: Response) => {
    SMovie.findByIdAndRemove(req.params.id).then(() => {
        res.status(200).json({
            code: 200,
            status: "succefully deleted"
        })
    })
})

router.put("/:id", (req: Request, res: Response) => {
    SMovie.findById(req.params.id).then((movie: any) => {
        movie.title = req.body.title
        movie.description = req.body.description
        movie.stars = req.body.stars
        movie.save().then(() => {
            res.status(200).json({
                code: 200,
                status: "succefully updated"
            })
        })
    })
})

export default router;