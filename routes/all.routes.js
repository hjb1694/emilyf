import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => { 
    res.render('index.ejs');
});

router.get('/about', (req, res) => { 
    res.render('about.ejs');
});

router.get('/work', (req,res) => { 
    res.render('work.ejs');
});


export default router;