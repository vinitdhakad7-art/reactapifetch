import { useEffect, useState } from "react"
import "./App.css"
const App = () => {
  const [products, setproducts]=useState([]);
  useEffect(()=>{
fetch("https://fakestoreapi.com/products")
.then((res)=> res.json())
.then((data)=> setproducts(data))
  },[])
  return (
    <div >
      <h1 style={{textAlign:"center", margin:"15px", fontSize:"45px", backgroundColor:"#1338BE", color:"white", padding:"7px", borderRadius:"20px", width:"60%", marginLeft:"20%", border:"5px solid #FFC30B"}}>Trending Collection</h1>
      <div className="container">
    {products.map((items)=>(
<div key={items.id} className="box">
 <div className="img"> <img src={items.image} alt="" /></div>
  <h3>{items.title}</h3>
  <h1>{items.price +" $"}</h1>
  <h2 >{items.rating.rate +"⭐"}</h2>
  </div>

    ))}
  </div>
</div>
  )
}

export default App