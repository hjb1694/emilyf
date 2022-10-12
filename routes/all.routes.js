import { Router } from 'express';
import notAuth from '../middleware/notAuth.js';

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

router.get('/work/freelance_internship', (req,res) => { 
    res.render('freelance_internship.ejs');
});

router.get('/contact', (req,res) => { 
    res.render('contact.ejs');
});

router.get('/auth', notAuth, (req,res) => { 
    res.render('auth.ejs');
});


export default router;