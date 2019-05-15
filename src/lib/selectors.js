import * as R from 'ramda'

export const getProductById = (state, id) => R.prop(id, state.products)

//export const getActiveCategoryId = ownProps => R.path(['params', 'id'], ownProps)
export const getActiveCategoryId = state => state.categoryPage.categoryId;


export const getProducts = (state) =>{
  //debugger;
  //const products = R.map(id => getProductById(state,id), state.productsPage.ids);
  const activeCategoryId = getActiveCategoryId(state);
  const applySearch = item => R.contains(
    state.productsPage.search, R.prop('name',item)
    );

    const applyCategory = item => R.equals(
      activeCategoryId,
      R.prop('categoryId', item)
    )

  const products =R.compose(
    R.filter(applySearch),
    R.when(R.always(activeCategoryId), R.filter(applyCategory)),
    R.map(id => getProductById(state,id) )
  )(state.productsPage.ids);
  return products;
}
// export const getProducts = (state, ownProps) => {
//   const activeCategoryId = getActiveCategoryId(ownProps)
//   const applySearch = item => R.contains(
//     state.productsPage.search,
//     R.prop('name', item)
//   )
//   const applyCategory = item => R.equals(
//     activeCategoryId,
//     R.prop('categoryId', item)
//   )

//   const products = R.compose(
//     R.filter(applySearch),
//     R.when(R.always(activeCategoryId), R.filter(applyCategory)),
//     R.map(id => getProductById(state, id))
//   )(state.productsPage.ids)

//   return products
// }

export const getRenderedProductsLength = state => R.length(state.productsPage.ids)

export const getTotalBasketCount = state => R.length(state.basket)

export const getTotalBasketPrice = state => {
  const totalPrice = R.compose(
    R.sum,
    R.pluck('price'),
    R.map(id => getProductById(state, id))
  )(state.basket)

  return totalPrice
}

export const getCategories = state => R.values(state.categories)


export const getBasketProductsWithCount = state => {
  const productCount = id => R.compose(
    R.length,
    R.filter(basketId => R.equals(id, basketId))
  )(state.basket)
  const productWithCount = product => R.assoc('count', productCount(product.id), product)

  const uniqueIds = R.uniq(state.basket)
  const products = R.compose(
    R.map(productWithCount),
    R.map(id => getProductById(state, id))
  )(uniqueIds)

  return products
}
