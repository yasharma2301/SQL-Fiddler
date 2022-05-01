export const SELECT_ALL_PRODUCTS = 'SELECT * FROM Products;'
export const SELECT_SOME_FROM_PRODUCTS = 'SELECT name, productID, supplierID, unitsInStock FROM Products;'
export const SELECT_SUPPLIER_GREATER = 'SELECT * FROM Suppliers WHERE supplierID > 25;'
export const MAP_PRODUCTS_TO_COMPANIES = 'SELECT Products.name AS productName, Suppliers.companyName\nFROM Products\nINNER JOIN Suppliers\nON Products.supplierID = Suppliers.supplierID;'
