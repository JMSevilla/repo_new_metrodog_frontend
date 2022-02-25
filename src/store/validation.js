

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
    user_access_management_validation_primaryinfo(arr) {
       var phone = /^(09|\+639)\d{9}$/;
       var emailadd = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
       for(var x = 0; x < arr.length; x++){
           return new Promise((resolve) => {
                if(!arr[x].userInfo.firstname || !arr[x].userInfo.lastname || !arr[x].userInfo.PA 
                || !arr[x].userInfo.contactnum || !arr[x].userInfo.email || !arr[x].userInfo.branch){ 
                    return resolve('empty')
                }else if(!arr[x].userInfo.contactnum.match(phone)) {
                     return resolve('invalid phone number')
                }else if(!arr[x].userInfo.email.match(emailadd)){
                     return resolve('invalid email address')
                }else {
                    return resolve('not empty')
                }
           })
       }
    }

    user_access_management_validation_credentials(arr) {
        for(var y = 0; y < arr.length; y++){
            return new Promise((resolve) => {
                 if(!arr[y].credentialsInfo.username || !arr[y].credentialsInfo.password || !arr[y].credentialsInfo.conPass 
                 || !arr[y].credentialsInfo.userType || !arr[y].credentialsInfo.secQuestions || !arr[y].credentialsInfo.secAnswer){ 
                     return resolve('empty')
                     
                 }else if(arr[y].credentialsInfo.password !== arr[y].credentialsInfo.conPass){
                     return resolve('password not match')
                 }
                 else {
                    return resolve('not empty')
                 }
            })
        }
     }
}

export default new SystemValidation();

