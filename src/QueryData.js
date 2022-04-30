import { Products } from './assets/data/products'
import { Suppliers } from './assets/data/suppliers';
import { SELECT_ALL_PRODUCTS, SELECT_SOME_FROM_PRODUCTS, SELECT_SUPPLIER_GREATER, MAP_PRODUCTS_TO_COMPANIES } from './Constants'

function processQuery(query) {
    switch (query) {
        case SELECT_ALL_PRODUCTS:
            return Products.map(product => flattenStrcuture(product));
        case SELECT_SOME_FROM_PRODUCTS:
            return Products.map(product => (
                {
                    productID: product.productID,
                    supplierID: product.supplierID,
                    unitsInStock: product.unitsInStock
                }
            ));
        case SELECT_SUPPLIER_GREATER:
            return Suppliers.filter(supplier => supplier.supplierID > 25);
        case MAP_PRODUCTS_TO_COMPANIES:
            return Suppliers.reduce((acc, supplier) => {

                Products.forEach(product => {
                    if (product.supplierID === supplier.supplierID) {
                        let newObj = {
                            "productName": product.name,
                            "companyName": supplier.companyName
                        }
                        acc.push(newObj);
                    }
                });

                return acc;
            }, [])
        default:
            return []
    }
}

function flattenStrcuture(map) {
    const flattenedMap = {}

    function flatUtil(map) {
        for (const key in map) {
            if (Array.isArray(map[key]) || typeof map[key] !== 'object') {
                flattenedMap[key] = map[key];
            } else {
                flatUtil(map[key]);
            }
        }
    }

    flatUtil(map)
    return flattenedMap;
}