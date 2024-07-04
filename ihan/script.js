



const items = document.querySelectorAll("#card_items_1 li");


items.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.transform = "translateY(-20px)";
    item.style.transition = "all 0.3s";
  });
  item.addEventListener("mouseout", () => {
    item.style.transform = "translateY(0)";
  });

  const items = document.querySelectorAll("#card_items_2 li");

  items.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.transform = "translateY(-20px)";
      item.style.transition = "all 0.3s";
    });
    item.addEventListener("mouseout", () => {
      item.style.transform = "translateY(0)";
    });
  });
});


// // background image change

// const bgImags = ["bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg", "bg5.jpg"];

// const bgImag = document.querySelector("#background_img");
// bgImag.style.backgroundImage =
// `radial-gradient(circle, transparent, rgba(0, 0, 0, 0.7)), url(./img/${bgImags[0]})`;

// const topContents = document.querySelector("#top_contents");
