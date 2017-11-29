import React from "react"

class Product extends React.Component {
  render() {
    return (

      <div className="product">
              <h2> {this.props.name} </h2>
          <div className="info-container">
            <div className="image-container">
                <img src={this.props.image} alt="Läkemedel"></img>
            </div>
                <li> {this.props.type} </li>
                <li> {this.props.substance} </li>
                <li> {this.props.size} </li>
                <li> {this.props.numberInPack} st. i förpackningen </li>
            <div className="price-button">
                <p2> {this.props.price} kr </p2>
                <button className="buy-button">Köp</button>
            </div>
            <div className="center">
                <p> Leveranstid: {this.props.deliveryTime} </p>
            </div>
          </div>
    </div>
    )
  }
}

export default Product
