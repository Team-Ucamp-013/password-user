const passwordService = class {

    constructor(userService){
        this.PasswordService = userService
    }

    async change(email,password,newPassword){
     const user = await this.PasswordService.changePassword(email,password,newPassword)
     
     if(user){
        console.log("exitoso")
     } else {
        throw new Error('Hubo algun error')
     }
    }
}

module.exports = passwordService