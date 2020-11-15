
export default (number) =>{
    for(let i =0; i < number.length; i++){
        if(number[i] >= '0' && number[i] <= '9') continue;
        else return false;
    }
    if(number.length < 8 || number.length > 15) return false;
    return true
}