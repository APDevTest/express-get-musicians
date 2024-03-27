const { Router } = require('express');
const musicianRouter = Router();
const Musician = require('../../models/Musician');

musicianRouter.get("/", async (req, res, next) => {
    const musicians = await Musician.findAll();
    res.json(musicians);
});

musicianRouter.get("/:id", async (req, res, next) => {
    const musician = await Musician.findByPk(req.params.id);
    res.json(musician);
});

musicianRouter.post("/", async (req, res, next) => {
    try {
        const musician = await Musician.create(req.body);
        if(!musician) {
            throw new Error("Invalid musician data");
        }
        res.json({musician: musician.name});
    } catch(err) {
        next(err);        
    }
});

musicianRouter.get("/:id", async (req, res, next) => {
    try {
        const musician = await Musician.findByPk(req.params.id);
        if(!musician) {
            throw new Error("Invalid musician data");
        }
        res.json(musician);
    }   catch(err) {
        next(err);        
    }
});

musicianRouter.delete("/:id", async (req, res, next) => {
    try {
        const musician = await Musician.findByPk(req.params.id);
        if(!musician) {
            throw new Error("Invalid musician data");
        }
        const deletedMusician = await musician.destroy();
        res.json(deletedMusician);
    } catch(err) {
        next(err);        
    }
    
musicianRouter.put("/:id", async (req, res, next) => {
        try {
            const musician = await Musician.findByPk(req.params.id);
            if(!musician) {
                throw new Error("Invalid musician data");
            }
            const updatedMusician1 = await musician.update(req.body);
            res.json(updatedMusician1);
        } catch(err) {
            next(err);        
        }
    })
})

module.exports = musicianRouter;