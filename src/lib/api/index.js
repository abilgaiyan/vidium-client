import * as R from 'ramda'
//import request from 'superagent'

import products from '../../store/mockPhones';
import categories from '../../store/mockCategories';


export const fetchProducts = async () => {
  // const {body} = await request.get(
  //   'http://www.mocky.io/v2/5918b9461200001f1040dbeb'
  // )
 // return body.products

 return new Promise(resolve => {
  resolve(products)
 // console.log(products);
})

}

export const loadMoreProducts = async ({offset}) => {
  return new Promise(resolve => {
    resolve(products)
  })
}

export const fetchProductById = async (id) => {
  return new Promise((resolve, reject) => {
    const product = R.find(R.propEq('id', id), products)
    resolve(product)
  })
}

export const fetchCategories = async () => {
  return new Promise((resolve, reject) => {
    resolve(categories)
  })
}
