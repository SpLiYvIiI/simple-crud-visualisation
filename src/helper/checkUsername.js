
export default (Username)=>{
    var pattern = new RegExp(/^[a-zA-Z0-9_]{5,}[a-zA-Z]+[0-9]*$/);
    if (!pattern.test(Username)) 
        return false;
    else return true;
}