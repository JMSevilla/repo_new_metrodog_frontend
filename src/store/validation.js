

class SystemValidation { 
    validate_user_login(u, p) {
        return new Promise(resolve => {
            if(!u) {
                return resolve("emptyUsername")
            } else if (!p) {
                return resolve("emptyPassword")
            }
            //  else if(p.length <= 6) {
            //     return resolve("passwordExceed")
            // }
             else { 
                return resolve("Good")
            }
        })
    }
    user_acces_management_validation_primaryinfo(arr) {
       for(var x = 0; x < arr.length; x++){
           return new Promise((resolve) => {
                if(!arr[x].userInfo.PA){ // add more OR operators for additional validations
                    //return resolve('empty')
                }
           })
       }
    }
}

export default new SystemValidation();