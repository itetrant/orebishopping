const backend_url = `http://localhost:8081/api`;

const page = 1
const limit = 50

const BackendApi = {
    signUP : {
        url : `${backend_url}/signup`,
        method : "post"
    },
    signIn : {
        url : `${backend_url}/signin`,
        method : "post"
    },
    current_user : {
        url : `${backend_url}/user-details`,
        method : "get"
    },
    get_banners : {
        url : `${backend_url}/home-banners`,
        method : "get"
    }, 
    get_hot_promotions : {
        url : `${backend_url}/hot-promotinons`,
        method : "get"
    },  
    get_best_selling : {
        url : `${backend_url}/best-selling`,
        method : "get"
    },   
    get_product_year : {
        url : `${backend_url}/product-of-the-year`,
        method : "get"
    },             
    logout_user : {
        url : `${backend_url}/userLogout`,
        method : 'get'
    },
    allUser : {
        url : `${backend_url}/all-user`,
        method : 'get'
    },
    updateUser : {
        url : `${backend_url}/update-user`,
        method : "post"
    },
    uploadProduct : {
        url : `${backend_url}/upload-product`,
        method : 'post'
    },
    allProduct : {
        url : `${backend_url}/get-product?page=${page}&limit=${limit}`,
        method : 'get'
    },
    updateProduct : {
        url : `${backend_url}/update-product`,
        method  : 'post'
    },
    categoryProduct : {
        url : `${backend_url}/get-categoryProduct`,
        method : 'get'
    },
    categoryWiseProduct : {
        url : `${backend_url}/category-product`,
        method : 'post'
    },
    productDetails : {
        url : `${backend_url}/product-details`,
        method : 'post'
    },
    addToCartProduct : {
        url : `${backend_url}/addtocart`,
        method : 'post'
    },
    addToCartProductCount : {
        url : `${backend_url}/countAddToCartProduct`,
        method : 'get'
    },
    addToCartProductView : {
        url : `${backend_url}/view-card-product`,
        method : 'get'
    },
    updateCartProduct : {
        url : `${backend_url}/update-cart-product`,
        method : 'post'
    },
    deleteCartProduct : {
        url : `${backend_url}/delete-cart-product`,
        method : 'post'
    },
    searchProduct : {
        url : `${backend_url}/search`,
        method : 'get'
    },
    filterProduct : {
        url : `${backend_url}/filter-product`,
        method : 'post'
    }
}


export default BackendApi