import exratelimit from "express-rate-limit"


const rateLimit = exratelimit({
    windowMs: 1 * 60 * 1000, 
    max: 100,
    message: {
        status: 429,
        response: "Too many request from this ip, please try again"
    }
})

export default rateLimit();
