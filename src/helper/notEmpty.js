
export default (obj)=>{
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return true;
        }
        return false;
}