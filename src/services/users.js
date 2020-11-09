import User from "../models/users";

// register new user
export const register = async (newUser) => {
    let user = new User(newUser);
    await user.save();
    return user;
};

// delete registration
export const deleteUser = async (_id) => {
    let result = await User.deleteOne({_id});
    return result;
};