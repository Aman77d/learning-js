class User { 

    constructor(username) {
        this.username = username
    }

    logMe(){
        console.log(`UserName : ${this.username}`);
    }

    static genrateId(){
        return `123`
    }

}

const name = new User("Aman")
// console.log(name.genrateId())

class Teacher extends User{
    constructor(username , email){
        super(username)
        this.email = email
    }
}

const phone = new Teacher("iphone" , "i@phone.com")
phone.logMe();