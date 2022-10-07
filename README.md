# Merchant-Service
Merchant service app is a service that handles the catalog of products owned by merchants. The user of this service is merchant. In this app a merchant could register itself/create an account and remove its data/delete its account in the merchant service. A merchant could add, delete, and update products in the merchant service. Also can get the list of products in the merchant service.


## Entity Relationship Diagram
This is how entity relationship work shown by diagram.
![ERD Merchant Service](https://user-images.githubusercontent.com/97390732/193992313-800d63f4-e9b6-4585-8ee6-3b6a9d086d10.png)


## Architecture Diagram Merchant Service
This is a architecture diagram of merchant service
![Architecture Diagram Merchant Service](https://user-images.githubusercontent.com/97390732/193992324-24f317ef-a574-4dbb-95cd-1fd6ece2d2e5.png)


## List of API

These are the list of API /user
```
[GET] /user -> to get all user on merchant service

[POST] /user -> to create account on merchant service

[DEL] /user/{id} -> to delete account on merchant service
```

These are the list of API /product
```
[GET] /product -> to get all products on merchant service

[POST] /product -> to add product on merchant service

[DEL] /product/{id} -> to delete product on merchant service

[PUT] /product/{id} -> to update product on merchant service
```

This is the API /login
```
[POST] /login -> to login on merchant service
```
