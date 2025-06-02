const UserModel = require('../model/user_model');

class UserServices {
    static async registeruser(email, password) {
        try {
            const createuser = new UserModel({ email, password });
            return await createuser.save();
        } catch (err) {
            throw err;
        }
    }
}
module.exports = UserServices;