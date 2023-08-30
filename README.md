
# Variety.PK - MERN Stack Application

Welcome to Variety.PK, your go-to destination for all things makeup! We're excited to introduce you to our carefully curated selection of beauty products. Whether you're a makeup pro or a beginner, we have something for everyone. Explore our range of vibrant colors, luxurious textures, and innovative formulations, and discover your unique beauty with Variety.PK. Get ready to express yourself like never before!


# Just have a look at our web application:

shy-jade-armadillo-vest.cyclic.app/


# Main Features

- Guest: Unauthenticated visitors who can browse products
- User: Authenticated customers who can add products to a cart, place orders, and track orders.
- Admin: Authenticated administrators with access to product management and order tracking.
- Authentication:Implemented user registration and login using JWT for secure authentication.
- Product Management:Implemented categories and brands to organize products.
- Image Uploading:Integrated Firebase for image storage.Allowed uploading of images for brands, categories, and products.Implemented multiple image uploads for products.
- Order Placement:Users can add products to their cart and place orders.Generated a unique tracking ID for each order. Stored order details in the database for future reference.
- Email Notifications:When an order is placed, the admin is notified via email, including the tracking ID
- User Order Tracking: Users can track their orders using the provided tracking ID.
 # Technologies Used

 ## FrontEnd  (React.js):
- Created components for user registration, login, product listing, cart, order placement, order
tracking, etc.
- Utilized routing to manage different user roles and navigation.

- Integrated Firebase SDK for image uploading.

## Backend (Node.js and Express.js):
- Developed RESTful APIs for user authentication, product management, order placement, and
tracking.

## Database (MongoDB):
- Designed the database schema for users, products, orders, categories, and brands.
## Firebase Integration:
- Set up a Firebase project for image storage
## Email Notification:
- Used nodemailer or a similar library to send email notifications to admin and users. 



## API Reference

#### Get all brands

```http
 '/get-all-brands'
```

#### Get brand by ID

```http
  '/get-brand-by-id'
```
#### Get brand by name
```http
  /get-brand-by-name'
```
#### Put update brand 
```http
  '/update-brand'
```
#### Delete  brand 
```http
  '/delete-brand/:_id'
```
#### Post create  brand 
```http
  '/create-brand'
```
#### Get all categories 
```http
  '/get-all-categories'
```
#### Put update categories 
```http
  '/update-category'
```
#### Delete  categories 
```http
  '/delete-category'
```
#### Post create  categories 
```http
  '/create-category'
```
#### Post place order
```http
  '/place-order'
```
#### Get track order
```http
  '/track-order/:_id'
```
#### Post login
```http
  '/login'
```
#### Post signup
```http
  '/signup'
```
#### Put update profile
```http
  '/update-profile'
```




