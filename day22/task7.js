const user = {
  username: "joee",
  login() {
    console.log(this.username + " logged in");
  },
  logout() {
    console.log(this.username + " logged out");
  }
};

user.login();
user.logout();
