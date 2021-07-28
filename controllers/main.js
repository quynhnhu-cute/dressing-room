let topClothTab = document.querySelector("#top-cloth");
let bottomClothTab = document.querySelector("#bottom-cloth");
let shoesTab = document.querySelector("#shoes");
let handBagTab = document.querySelector("#handbag");
let necklaceTab = document.querySelector("#necklace");
let hairTab = document.querySelector("#hairstyle");
let backgroundTab = document.querySelector("#background");
let itemService = new ItemService();

//clear style of all tab
const clearTabStyle = () => {
  var listBackground = document.querySelectorAll(".tab-item");
  listBackground.forEach((item) => (item.style.backgroundColor = "white"));
  var listColor = document.querySelectorAll(".tab-item a");
  listColor.forEach((item) => (item.style.color = "#04a8dfbe"));
};

//getAllItems

// const getItems = async () => {
//   try {
//     let result = await itemService.getAllItems();
//     return result.data;
//   } catch (error) {
//     console.log(error);
// }

//  itemService
// .getAllItems()
// .then((result) => {
//   console.log(result.data);
//   return result.data;
// })
// .catch((error) => {
//     console.log(error);
// });
// };

const getListItemByType = (typeName) => {
  let content = "";
  itemService
    .getAllItems()
    .then((result) => {
      result.data.map((item, index) => {
        if (item.type == typeName) {
          content += `
                <div class="col-3>
                <div class="card item-card" style="width:12rem;margin-left:40px;margin-top:30px">
                  <img src="${item.imgSrc_jpg}" class="card-img-top" alt="topCloth">
                  <div class="card-body item-content">
                    <h6 class="card-title">${item.name}</h6>
                    <a href="#" class="btn btn-primary" style="width:150px" onclick='tryHard(${JSON.stringify(item)})'>Thử đồ</a>
                  </div>
                </div>
              </div>
                  `;
        }
      });

      document.querySelector("#itemList").innerHTML = content;
    })
    .catch((error) => console.log(error));
};

const tryHard = (item) => {
  console.log("here");
  console.log(item);

  // ở đây em muốn in ra cả 1 cái item ạ , item lấy về trong axios bao gồm : id, type, name vâng vâng ạ
}

// Press tab áo
// topClothTab.onclick = function () {
//   clearTabStyle();
//   topClothTab.style.backgroundColor = "#04a8dfbe";
//   document.querySelector("#top-cloth a").style.color = "white";
//   getListItemByType("topclothes");
// };

const onclickTopCloth = () => {
  clearTabStyle();
  topClothTab.style.backgroundColor = "#04a8dfbe";
  document.querySelector("#top-cloth a").style.color = "white";
  getListItemByType("topclothes");
};

onclickTopCloth();

//Press tab quần

bottomClothTab.onclick = function () {
  clearTabStyle();
  bottomClothTab.style.backgroundColor = "#04a8dfbe";
  document.querySelector("#bottom-cloth a").style.color = "white";
  getListItemByType("botclothes");
};

//Press tab giày
shoesTab.onclick = function () {
  clearTabStyle();
  shoesTab.style.backgroundColor = "#04a8dfbe";
  document.querySelector("#shoes a").style.color = "white";
  getListItemByType("shoes");
};

//Press tab túi xách
handBagTab.onclick = function () {
  clearTabStyle();
  handBagTab.style.backgroundColor = "#04a8dfbe";
  document.querySelector("#handbag a").style.color = "white";
  getListItemByType("handbags");
};

//Press tab dây chuyền
necklaceTab.onclick = function () {
  clearTabStyle();
  necklaceTab.style.backgroundColor = "#04a8dfbe";
  document.querySelector("#necklace a").style.color = "white";
  getListItemByType("necklaces");
};
//Press tab tóc
hairTab.onclick = function () {
  clearTabStyle();
  hairTab.style.backgroundColor = "#04a8dfbe";
  document.querySelector("#hairstyle a").style.color = "white";
  getListItemByType("hairstyle");
};
//Press tab hình nền
backgroundTab.onclick = function () {
  clearTabStyle();
  backgroundTab.style.backgroundColor = "#04a8dfbe";
  document.querySelector("#background a").style.color = "white";
  getListItemByType("background");
};

const tryItem = (className, linkImage) => {
  let divContent = document.getElementsByClassName(className);
  // console.log(document.getElementsByClassName("bikinibottom"));
  // console.log(document.getElementsByClassName("bikinitop"));
  // console.log(divContent);
  divContent[0].style.background = `url('${linkImage}')`;
};

// try clothes

const tryClothes = (itemID) => {
  itemService
    .getItemById(itemID)
    .then((result) => {
      let item = result.data;
      console.log(item.type);
      switch (item.type) {
        case "topclothes":
          // console.log("here");
          tryItem("bikinitop", item.imgSrc_png);
          break;
        case "botclothes":
          tryItem("bikinibottom", item.imgSrc_png);
          break;
        case "shoes":
          tryItem("feet", item.imgSrc_png);
          break;
        case "handbags":
          tryItem("handbag", item.imgSrc_png);
          break;
        case "hairstyle":
          tryItem("hairstyle", item.imgSrc_png);
          break;
        case "necklaces":
          tryItem("necklace", item.imgSrc_png);
          break;
        case "background":
          tryItem("background", item.imgSrc_png);
          break;
      }
    })
    .catch((error) => console.log(error));
};
