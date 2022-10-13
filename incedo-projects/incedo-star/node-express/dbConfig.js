
class DbConnection {

    constructor() {

        this.user = 'root';
        this.PASSWORD = "Neptune6587";
        this.DB = "star";
        this.host = "localhost"
        this.port =3306

    }
    getUserName() {
        return this.user

    }
    getPassword() {
        return this.PASSWORD
    }
    getHostName() {
        return this.host
    }
    getDataBaseName() {
        return this.DB
    }

}


module.exports = DbConnection;