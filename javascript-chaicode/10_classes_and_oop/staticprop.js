class User {
  constructor(username) {
    this.username = username;
  }

  logme() {
    console.log(`Username: ${this.username}`);
  }

  static createId() {
    return `123`
  }

}

const ansh = new User("ansh");
// console.log(ansh.createId())

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

  const iphone = new Teacher("iphone", "i@phone.com");
  console.log(iphone.createId())