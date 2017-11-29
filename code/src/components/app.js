import React from "react"
import Product from "./product"
const productsJson = require("./../products.json")


console.log("Products: (Remove this line in app.js!)", productsJson)

class App extends React.Component {

  render() {
    return (
      <div className="App">
        {/* Find me in src/app.js! */}


        <div className="product-container">
          {productsJson.products.map((item) => {
            return <Product name={item.name}
                            image={item.image}
                            price={item.price}
                            type={item.type}
                            size={item.size}
                            numberInPack={item.numberInPack}
                            deliveryTime={item.deliveryTime}
                            substance={item.substance} />
          })}
        </div>


      </div>
    )
  }
}

export default App
