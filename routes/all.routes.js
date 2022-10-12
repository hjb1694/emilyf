import { Router } from 'express';
import notAuth from '../middleware/notAuth.js';
import AuthQueries from '../database/queries/auth.queries.js';
import bcrypt from 'bcryptjs';
import isAuth from '../middleware/isAuth.js';
import validateContactForm from '../middleware/validateContactForm.js';
import sanitizeContactFormFields from '../middleware/sanitizeContactFormFields.js';
import FormQueries from '../database/queries/formQueries.queries.js';

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

router.post('/contact', validateContactForm, sanitizeContactFormFields, (req,res) => { 

    try { 
        const { name, email, message } = req.body;

        await FormQueries.insertContactInquiry(name, email, message);

        res.status(201).json({
            body: 'success!'
        });

    }
    catch (e) {
        console.error(e);
        res.status(500).json({
            body: 'failed!'
        });
    }


});

router.get('/auth', notAuth, (req,res) => { 
    res.render('auth.ejs');
});

router.post('/auth', notAuth, async (req, res) => {
    
    try {
        
        const { username, password } = req.body;

        const creds = await AuthQueries.getCredentialsByUsername(username);

        if (!creds) {
            throw new Error('no matching users with username.');
        }

        const matches = await bcrypt.compare(password, creds.password);

        if (!matches) {
            throw new Error('password mismatch.');
        }

        req.session.isLoggedIn = true;

        res.status(200).json({ body: 'success!' });

        
    } catch (e) {
        console.error(e);
        res.status(500).json({
            body: 'unsuccessful login'
        });
    }
});

router.get('/admin', isAuth, (req,res) => {
    res.render('admin.ejs');
})


export default router;