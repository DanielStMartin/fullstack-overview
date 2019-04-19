module.exports = {
  // Very similar to how it should be set up but we are not using bcrypt, (HINT: )
  signIn: (req, res) => {
    const db = req.app.get("db");
    const { username, password } = req.body;
    db.find_user(username).then(user => {
      if (user[0]) {
        if (password === user[0].password) {
          req.session.user = {
            username: user[0].username,
            full_name: user[0].full_name
          };
          res.status(200).send(req.session.user);
        } else {
          res.status(401).send("password does not match");
        }
      } else {
        res.status(404).send("that username doesnt exist, please register");
      }
    });
  },
  //   create table admin(
  //     id serial primary key,
  //     username varchar(20) not null,
  //     password varchar(64) not null,
  //     full_name text);

  register: (req, res) => {
    const db = req.app.get("db");
    // user attempts to register by sending by sending the server username, password and full_name
    const { username, password, full_name } = req.body;
    // check db to see if user is already exsists
    db.find_user(username).then(user => {
      // if user exsist, do do not let them register again
      if (user.length) {
        res.status(200).send("That User already exists");
      } else {
        //   if the user does not already exsists, we will create the user, set them
        //   to a session and send the data to the front
        db.create_user([username, password, full_name]).then(user => {
          req.session.user = {
            username: user[0].username,
            full_name: user[0].full_name
          };
          res.status(200).send(req.session.user);
        });
      }
    });
  }
};
