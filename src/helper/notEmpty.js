const notEmpty = (obj)=>{
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return true;
        }
        return false;
};
export default notEmpty;