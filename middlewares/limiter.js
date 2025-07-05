import rateLimit from "express-rate-limit"


const rateLimiter = rateLimit({
    windowMs: 1 * 60 * 1000, 
    max: 100,
    message: {
        status: 429,
        response: "Too many request from this ip, please try again"
    }
});

export default rateLimiter;
