const data = [
  {
    id: 1,
    title: "Manga Jujutsu Kaisen",
    img: "https://http2.mlstatic.com/D_NQ_NP_688147-MLA51471413433_092022-V.webp",
    price: 1100,
    expired: false,
    detail: "Manga de jujutsu no kaisen, tomos del 1 al 17 $1.100 c/u.",
    stock: 10,
    category: "Mangas",
  },
  {
    id: 2,
    title: "Demon Slayer Kimetsu No Yaiba",
    img: "https://http2.mlstatic.com/D_NQ_NP_749919-MLA49277634710_032022-O.webp",
    price: 990,
    expired: false,
    detail:
      "Demon Slayer Kimetsu No Yaiba Ivrea Manga Tomos, tomos del 1 al 21 $990 c/u.",
    stock: 21,
    category: "Mangas",
  },
  {
    id: 3,
    title: "Campera Naruto Uzumaki",
    img: "https://http2.mlstatic.com/D_NQ_NP_879128-MLA46507574474_062021-O.webp",
    price: 4500,
    expired: false,
    detail: "Campera estilo Naruto Uzumaki. Talles disponibles Xl/L/S",
    stock: 32,
    category: "Vestimenta",
  },
  {
    id: 4,
    title: "Remera Chainsaw Man Pochita",
    img: "https://http2.mlstatic.com/D_NQ_NP_873063-MLA50955229662_082022-O.webp",
    price: 3200,
    expired: false,
    detail:
      "Remera Estilo Chainsaw Man con estampado de Pochita. Talles disponible XXL/XL/L/S",
    stock: 15,
    category: "Vestimenta",
  },
  {
    id: 5,
    title: "Figura Nobara Kugisaki Jujutsu Kaisen",
    img: "https://wabro.vteximg.com.br/arquivos/ids/187104-1000-1000/figura-nobara-taito11-6ad32cc4f9265527b916551560715768-640-0.jpg?v=637974025112870000",
    price: 13500,
    expired: false,
    detail:
      "Figura de Nobara Kugisaki del anime Jujutsu Kaisen. 15cm de Altura. Producto Original importado de Japon. ",
    stock: 5,
    category: "Figuras",
  },
  {
    id: 6,
    title: "Figura Tanjiro Demon Slayer",
    img: "https://http2.mlstatic.com/D_NQ_NP_785804-MLA50655237902_072022-O.webp",
    price: 18500,
    expired: false,
    detail:
      "Figura de Tanjiro del anime Demon Slayer. 20cm de Altura. Producto Original importado de Japon. ",
    stock: 7,
    category: "Figuras",
  },
  {
    id: 7,
    title: "Frazada Manta Sailor Moon",
    img: "https://http2.mlstatic.com/D_NQ_NP_794105-MLA46352838570_062021-O.webp",
    price: 8690,
    expired: false,
    detail:
      "Frazada con estampado estilo de Sailor Moon. Medidas: 1,4m X 1,4m.",
    stock: 18,
    category: "Decoracion",
  },
  {
    id: 8,
    title: "Porta Llaves Pared Jujutsu Kaisen Sukuna",
    img: "https://http2.mlstatic.com/D_NQ_NP_648203-MLA49809364542_042022-O.webp",
    price: 1650,
    expired: false,
    detail: "Porta Llaves Pared Jujutsu Kaisen Sukuna. Tamaño: 20cm X 40cm",
    stock: 23,
    category: "Decoracion",
  },
];

export function getData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 1000);
  });
}

export function getSingleData(id) {
  return new Promise((resolve, reject) => {
    let itemRequest = data.find((item) => {
      return item.id === Number(id);
    });
    setTimeout(() => {
      if (itemRequest === undefined)
        reject(new Error("No se encontro el producto"));
      else {
        resolve(itemRequest);
      }
    }, 1000);
  });
}

export function getDataCategory(idCategoryParams) {
  return new Promise((resolve) => {
    let filterItem = data.filter((item) => item.category === idCategoryParams);
    setTimeout(() => resolve(filterItem), 1000);
  });
}
