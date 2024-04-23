const { Button, Card } = ReactBootstrap;

const data = [
  {
    title: "Coffee",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nostrum quam provident obcaecati dolores. Minus exercitationem soluta incidunt libero tempore.",
    btnCaption: "Order Now",
    imgSrc:
      "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  },
  {
    title: "Non-Vegetarian foods",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nostrum quam provident obcaecati dolores. Minus exercitationem soluta incidunt libero tempore.",
    btnCaption: "Order Now",
    imgSrc:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  },
  {
    title: "Juices",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nostrum quam provident obcaecati dolores. Minus exercitationem soluta incidunt libero tempore.",
    btnCaption: "Order Now",
    imgSrc:
      "https://images.unsplash.com/photo-1612528443849-93d29841db4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  },
  {
    title: "Spicy foods",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nostrum quam provident obcaecati dolores. Minus exercitationem soluta incidunt libero tempore.",
    btnCaption: "Order Now",
    imgSrc:
      "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  },
  {
    title: "Healthy foods",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nostrum quam provident obcaecati dolores. Minus exercitationem soluta incidunt libero tempore.",
    btnCaption: "Order Now",
    imgSrc:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  }
];

function App() {
  return (
    <div className="card-container">
      {/* start from here */}
      <h1 style={{ color: "#dddddd" }}> Scroll to see animation </h1>
      {data.map((card, i) => (
        <BasicCard
          key={i}
          title={card.title}
          content={card.content}
          btnCaption={card.btnCaption}
          imgSrc={card.imgSrc}
        />
      ))}
    </div>
  );
}

function BasicCard({ title, content, btnCaption, imgSrc }) {
  return (
    <Card style={{ width: "22rem" }} className="card">
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title> {title} </Card.Title>
        <Card.Text>{content}</Card.Text>
        <Button variant="primary">{btnCaption}</Button>
      </Card.Body>
    </Card>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

/*****logic for animation on scroll event*****/
window.addEventListener("scroll", () => {
  const cardElem = Array.from(document.querySelectorAll(".card"));
  cardElem.map((card) => {
    const pos = card.getBoundingClientRect();
    const top = pos.top;

    const innerHeight = window.innerHeight;
    const offset = 150;
    innerHeight - top > offset
      ? card.classList.add("active")
      : card.classList.remove("active");
  });
});