import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTN-PziyC4biNtO3hzRhtf0N_FtVJ8GJs",
  authDomain: "react34764-animego.firebaseapp.com",
  projectId: "react34764-animego",
  storageBucket: "react34764-animego.appspot.com",
  messagingSenderId: "847876982941",
  appId: "1:847876982941:web:895837873cb5ca31a6ac74",
};

const firebaseApp = initializeApp(firebaseConfig);
const dataBase = getFirestore(firebaseApp);

export async function getData() {
  const collectionRef = collection(dataBase, "productos");
  let results = await getDocs(collectionRef);
  let data = results.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  return data;
}

export async function getSingleData(id) {
  const docRef = doc(dataBase, "productos", id);
  const docResults = await getDoc(docRef);
  if (docResults.exists()) {
    return { id: docResults.id, ...docResults.data() };
  } else {
    return { id: 0 };
  }
}

export async function getDataCategory(idCategoryParams) {
  const collectionRef = collection(dataBase, "productos");
  const queryCategory = query(
    collectionRef,
    where("category", "==", idCategoryParams)
  );
  let results = await getDocs(queryCategory);
  let data = results.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  return data;
}

export async function createBuyOrder(orderData) {
  const collectionRef = collection(dataBase, "ordenes");
  let respuesta = await addDoc(collectionRef, orderData)
  return respuesta.id
}

/* FUNCION PARA ENVIAR DATOS */
/* export async function sendDataToFirebase(){
  const data = [
    {
      title: "Manga Jujutsu Kaisen",
      img: "https://http2.mlstatic.com/D_NQ_NP_688147-MLA51471413433_092022-V.webp",
      price: 1100,
      detail: "Manga de jujutsu no kaisen, tomos del 1 al 17 $1.100 c/u.",
      stock: 10,
      category: "Mangas",
    },
    {
      title: "Demon Slayer Kimetsu No Yaiba",
      img: "https://http2.mlstatic.com/D_NQ_NP_749919-MLA49277634710_032022-O.webp",
      price: 990,
      detail:
        "Demon Slayer Kimetsu No Yaiba Ivrea Manga Tomos, tomos del 1 al 21 $990 c/u.",
      stock: 21,
      category: "Mangas",
    },
    {
      title: "Campera Naruto Uzumaki",
      img: "https://http2.mlstatic.com/D_NQ_NP_879128-MLA46507574474_062021-O.webp",
      price: 4500,
      detail: "Campera estilo Naruto Uzumaki. Talles disponibles Xl/L/S",
      stock: 32,
      category: "Vestimenta",
    },
    {
      title: "Remera Chainsaw Man Pochita",
      img: "https://http2.mlstatic.com/D_NQ_NP_873063-MLA50955229662_082022-O.webp",
      price: 3200,
      detail:
        "Remera Estilo Chainsaw Man con estampado de Pochita. Talles disponible XXL/XL/L/S",
      stock: 15,
      category: "Vestimenta",
    },
    {
      title: "Figura Nobara Kugisaki Jujutsu Kaisen",
      img: "https://wabro.vteximg.com.br/arquivos/ids/187104-1000-1000/figura-nobara-taito11-6ad32cc4f9265527b916551560715768-640-0.jpg?v=637974025112870000",
      price: 13500,
      detail:
        "Figura de Nobara Kugisaki del anime Jujutsu Kaisen. 15cm de Altura. Producto Original importado de Japon. ",
      stock: 5,
      category: "Figuras",
    },
    {
      title: "Figura Tanjiro Demon Slayer",
      img: "https://http2.mlstatic.com/D_NQ_NP_785804-MLA50655237902_072022-O.webp",
      price: 18500,
      detail:
        "Figura de Tanjiro del anime Demon Slayer. 20cm de Altura. Producto Original importado de Japon. ",
      stock: 7,
      category: "Figuras",
    },
    {
      title: "Frazada Manta Sailor Moon",
      img: "https://http2.mlstatic.com/D_NQ_NP_794105-MLA46352838570_062021-O.webp",
      price: 8690,
      detail:
        "Frazada con estampado estilo de Sailor Moon. Medidas: 1,4m X 1,4m.",
      stock: 18,
      category: "Decoracion",
    },
    {
      title: "Porta Llaves Pared Jujutsu Kaisen Sukuna",
      img: "https://http2.mlstatic.com/D_NQ_NP_648203-MLA49809364542_042022-O.webp",
      price: 1650,
      detail: "Porta Llaves Pared Jujutsu Kaisen Sukuna. Tamaño: 20cm X 40cm",
      stock: 23,
      category: "Decoracion",
    },
  ];

  let itemsCollectionRef = collection(dataBase,"productos")
  for(let item of data){
    let newDoc= await addDoc(itemsCollectionRef, item)
    console.log("Documento enviado:", newDoc.id)
  }
} */

export default firebaseApp;
