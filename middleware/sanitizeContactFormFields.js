import sanitize from "sanitize-html"

export default (req, res, next) => { 

    function sanitizeString(str) { 
        return sanitize(str, {
            allowedTags: []
        })
    }

    req.body.name = sanitizeString(req.body.name);
    req.body.email = sanitizeString(req.body.email);
    req.body.message = sanitizeString(req.body.message);

    next();
    
}