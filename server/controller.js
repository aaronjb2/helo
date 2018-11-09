const bcrypt = require('bcryptjs');

module.exports = {
    async register(req,res,next){
        let {username, password} = req.body;
        let db = req.app.get('db');
        let foundUser = await db.find_user([username]);
        if (foundUser[0]) return res.status(200).send({message:"User already exists."})
        let salt = bcrypt.genSaltSync(10);
        let hashbrowns = bcrypt.hashSync(password,salt);
        let [createdUser] = await db.create_helouser([username,hashbrowns]);
        req.session.user = {username: createdUser.username};
        res.status(200).send({message:'loggedIn'});
    },
    async login(req,res,next){
        console.log('inside server login')
        let {username, password} = req.body;
        let db = req.app.get('db');
        let foundUser = await db.find_user([username]);
        if (!foundUser[0]) return res.status(200).send({message:"No such user exists."})
        let result = bcrypt.compareSync(password,foundUser[0].hash);
        if (!result) return res.status(401).send({message:'Incorrect Password.'})
        req.session.user = {username: foundUser[0].username};
        res.status(200).send({message:'loggedIn'});
    },
    logout(req,res,next){
        req.session.destroy();
        res.redirect('http://localhost:3000');
    }
}