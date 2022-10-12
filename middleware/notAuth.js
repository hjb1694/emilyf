export default (req, res, next) => { 
    
    if (req.session.isLoggedIn) { 
        return res.redirect('/admin');
    }

    next();

}