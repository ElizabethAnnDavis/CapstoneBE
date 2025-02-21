import jtw from 'jsonwebtoken';

export default (req, res, next) => {
    // Pull token from header
    const token = req.header('x-auth-token'); // every header needs this!!! : x-auth-token

    // Check if token exists
    if(!token){
        return res.status(401).json({ errors: [{ msg: 'No Token, Auth Denied'}] });
    }

    // Verify token
    try{
        // Decode token
        const decoded = jtw.verify(token, process.env.jwtSecret);

        // Save decoded user to request
        req.user = decoded.user;

        next();
    }catch(err){
        console.error(err);
        res.status(401).json({ errors: [{ msg: 'Token is not valid'}] });
    }
}