export const selectUser = (user) => {
    console.log("User clicked on ",user.first);
    return {
        type:"USER_SELECTED",
        payload:user
    }

}