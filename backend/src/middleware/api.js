
exports.getData = async (req, res, next) => {

    try {
        const result = await fetch('https://dummyjson.com/users?limit=100'); //using external api 
        if (!result.ok) {
            res.status(400).send("try again later");
        }
        const json = await (result.json());
        req.data = json;
        next();
    }
    catch {
        res.status(400).send("invalid");
    }
}




