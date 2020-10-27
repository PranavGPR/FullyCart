## Run Locally

### 1. Clone repo

```shell
$ git clone "https://github.com/PranavGPR/FullyCart.git"
$ cd FullyCart
```

### 2. Install MongoDB

Download it from here: https://docs.mongodb.com/manual/administration/install-community/

### 3. Run Backend

```shell
$ npm install
$ npm start
```

### 4. Run Frontend

```shell
# Open new terminal
$ cd app
$ npm install
$ npm start
```

### 5. Create Admin User

- Run this on chrome: http://localhost:5000/api/users/createadmin
- It returns admin email and password

### 6. Login

- Run http://localhost:3000/signin
- Enter admin email and password and click signin

### 7. Create Products

- Run http://localhost:3000/products
- Click create product and enter product info

### 8. Rate and Review Products

This part shows list of reviews by users for each products. also it provides a form to enter rating and review for every single product. also it update the avg rating of each product by user ratings.

1. index.html
2. link fontawesome
3. Rating.js
4. create stars based on props.value
5. show text based on props.text
6. index.css
7. style rating, span color gold and last span to gray, link text to blue
8. HomeScreen.js
9. use Rating component
10. ProductScreen.js
11. use Rating component, wrap it in anchor#reviews
12. list reviews after product details
13. create new review form to get rating and reviews
14. index.css
15. style reviews
16. ProductScreen.js
17. implement submitHandler
18. productActions.js
19. create saveProductReview(productId, review)
20. productConstants.js
21. create product review constants
22. productReducers.js
23. create productReviewSaveReducer
24. store.js
25. add productReviewSaveReducer
26. backend
27. productRoute.js
28. router.post('/:id/reviews')
29. save review in product.reviews
30. update avg rating

## Summary

In this repo, we have made an eCommerce website like Amazon. Feel free to change this project based on your needs and add it to your portfolio.
Also, I will love to hear your comment about this React and Node tutorial. Please share your thoughts here.
