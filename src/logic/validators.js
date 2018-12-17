export const validateUsername = (userName) => {
    //Regex found on the internet
    //May not meet all rules required by Github
    let usernameRegex = new RegExp('^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$');
    return usernameRegex.test(userName);
}