const db = require("../data/database");

class Order {
  //Status => pending, fullfiled, cancelled
  constructor(cart, userData, status = "pending", date, orderId) {
    this.productData = cart;
    this.userData = userData;
    this.status = status;
    this.date = new Date(date);
    if (this.date) {
      this.formattedDate = this.date.toLocaleDateString("en-US", {
        weekday: "short",
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    }
    this.id = orderId;
  }

  save() {
    if (this.id) {
      //updating
    } else {
      //new order
      const orderDocument = {
        userData: this.userData,
        productData: this.productData,
        data: new Date(),
        status: this.status,
      };

      return db.getDb().collection("orders").insertOne(orderDocument);
    }
  }
}

module.exports = Order;
