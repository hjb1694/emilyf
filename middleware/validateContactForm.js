import sanitize from "sanitize-html";
import stringLength from "string-length";

export default (req, res, next) => { 

    const { name, email, message } = req.body;

    let errorCount = 0;

    const regs = {
        name: /^[a-z ,.'-]+$/i, 
        email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i
    }

    function sanitizeString(str) { 
        return sanitize(str, {
            allowedTags: []
        })
    }

    if (
        !regs.name.test(name) ||
        stringLength(name) > 60
    ) errorCount++;

    if(!regs.email.test(inputs.email.value)) errorCount++;     

    if(
        stringLength(sanitizeString(message)) < 10 ||
        stringLength(sanitizeString(message)) > 3000
    ) errorCount++;
           
    if (errorCount) { 
        return res.status(422).json({
            body: 'failed validation.'
        });
    }

    next();

}