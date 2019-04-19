module.exports = {
  getAll: (req, res, next) => {
    const db = req.app.get("db");
    console.log("first");
    db.get_products()
      .then(products => {
        console.log(products);
        res.status(200).send(products);
      })
      .catch(err => console.log(err.detail));
  },
  //   create table products(
  //     product_id serial primary key,
  //     name varchar(25) not null,
  //     price float not null,
  //     tax float not null,
  //     description text,
  //     image text,
  //     admin_id integer references admin(id)
  createProduct: (req, res) => {
    const db = req.app.get("db");
    const { name, price, tax, description, image, admin_id } = req.body;
    db.create_product([name, price, tax, description, image, admin_id]).then(
      response => {
        res.status(200).json(response);
      }
    ).catch(err => {
        console.log(err)
        res.status(400).send("Get outta here")
    })
  }
};
