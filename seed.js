import {faker} from 'faker'
import fs from 'fs'

const {price, productName, productDescription} = faker.commerce;

const products = [...Array(30).keys()].map((_, i)=>({
    id: i+1,
    title: productName(),
    price: price(),
    description: productDescription(),
    imageUrl: 'https://vjoy.cc/wp-content/uploads/2019/06/1-12.jpg'
}
))

const json = {products, orders: []}

fs.writeFileSync('./db.json', JSON.stringify(json), 'utf-8', ()=>{
    console.log('success')
})