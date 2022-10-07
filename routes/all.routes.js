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

router.get('/work/scg', (req,res) => { 
    res.render('solution_consulting_group.ejs');
});


export default router;