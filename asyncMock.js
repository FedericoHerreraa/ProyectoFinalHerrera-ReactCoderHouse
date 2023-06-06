
const products = [
    { 
        id: '1', 
        name: 'Buzo hombre REEF', 
        price: 11000, 
        category: 'hombre', 
        img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/165/935/products/buzo-umbro-newark-crew-rosa-hombre-2722131291-8388d558916e850d4316484760905546-640-0.jpg', 
        stock: 25, 
        description:'Descripcion de buzo hombre'
    },
    { 
        id: '2',
        name: 'Buzo hombre FILA',
        price: 15000,
        category: 'hombre',
        img:'https://megasports.vteximg.com.br/arquivos/ids/205949-1000-1000/40948060001_0.jpg?v=637700143586900000',
        stock: 16,
        description:'Descripcion de buzo hombre'
    },
    { 
        id: '3',
        name: 'Buzo mujer Under Armor',
        price: 12500,
        category: 'mujer',
        img:'https://www.underarmour.com.ar/on/demandware.static/-/Sites-underarmour_staging/default/dw07f6e6d8/new_images/1356318/195252577483/195252577483-1.jpeg',
        stock: 10,
        description:'Descripcion de buzo mujer'
    },
    { 
        id: '4',
        name: 'Buzo hombre CARDON',
        price: 8900,
        category: 'tablet',
        img:'https://cardon.com.ar/wp-content/uploads/2022/03/155550115BT_68-1513.jpg',
        stock: 10,
        description:'Descripcion de buzo hombre'
    },
    
]

export const getProducts = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(products)
        }, 1000)
    })
}

export const detailProduct = (prodId) => {
    return new Promise((res) => {
        setTimeout(() => {
            res(products.find((prod) => prod.id === prodId))
        }, 1000)
    })
}

export const getProductByCategory = (categoryId) => {
    return new Promise((res) => {
        setTimeout(() => {
            res(products.filter((prod) => prod.category === categoryId))
        }, 500)
    })
}