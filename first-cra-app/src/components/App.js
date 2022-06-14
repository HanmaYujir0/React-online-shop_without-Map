import Header from "./Header/Header"
import style from './app.module.css';
import Sidebar from "./Sidebar/Sidebar";
import Product from "./Product/Product"



const products = [
  {
    img: "https://avatars.mds.yandex.net/get-mpic/4493022/img_id5724159250276413205.jpeg/orig",
    price: 97000,
    name: "MacBook",
    oldprice: 100000
  },
  {
    img: "https://uralcases.ru/wp-content/uploads/2020/11/i12-pro-blue.jpg",
    price: "89999р",
    name: "IPhone",
  },
  {
    img: "https://mototeka.su/upload/iblock/bb9/bb9b535db3231bdc9164695ae06fd0eb.jpg",
    price: 58950,
    name: "Скутер",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJzxq16dbwZcLpkPpJHoZ1Ko1ftIbvFlgoww&usqp=CAU",
    price: 12000,
    name: "Монитор Samsung",
  },
  {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHFjb9XxlTRuArH3EATWL9cFI0SBvw8SlW2g&usqp=CAU",
    price: 500,
    name: "Респераторная маска",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTByX8rIGGC1YVNrGNhqsoRvK6abGTldyo34w&usqp=CAU",
    price: 75500,
    name: "Стиральная машина",
  },
];

function App() {
  return (<>
  <Header />
  <div className={style.cont}>
    <Sidebar />
    <div className={style.cont_1}>
      <Product img={products[0].img} price ={products[0].price} name={products[0].name} />
      <Product img={products[1].img} price ={products[1].price} name={products[1].name} />
      <Product img={products[2].img} price ={products[2].price} name={products[2].name} />
      <Product img={products[3].img} price ={products[3].price} name={products[3].name} />
      <Product img={products[4].img} price ={products[4].price} name={products[4].name} />
      <Product img={products[5].img} price ={products[5].price} name={products[5].name} />
    </div>
  </div>
  </>
  )
}

export default App;
