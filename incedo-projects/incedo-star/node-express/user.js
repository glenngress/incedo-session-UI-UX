class User {

    constructor(userid,password,name,activefrom,role,status){
        this.userid=userid;
        this.password=password;
        this.name=name;
        this.activefrom=activefrom;
        this.role=role;
        this.status=status;
    }

}

module.exports = User;