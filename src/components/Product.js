//product
import one from "../assets/images/img1.jpg"
import two from "../assets/images/img2.jpg"
import three from "../assets/images/img3.jpg"
function Product(){
    return(<div className="products">
    <div className="box">
      <img src={one} width="300px" height="300px" alt="img1"></img>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A modi aut veniam cupiditate odit unde vero quibusdam adipisci fugiat aliquid.</p>
    </div>
    <div className="box">
      <img src={two} width="300px" height="300px" alt="img2"></img>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A modi aut veniam cupiditate odit unde vero quibusdam adipisci fugiat aliquid.</p>
    </div>
    <div className="box">
      <img src={three} width="300px" height="300px" alt="img3"></img>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A modi aut veniam cupiditate odit unde vero quibusdam adipisci fugiat aliquid.</p>
    </div>
  </div>
  )
  }
  export default Product