### About Ecommerce DB

<details>
<summary>Table of Contents</summary>
  <ol>
    <li><a href="#description">Description</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#future-updates">Future Updates</a></li>
  </ol>
</details>

## Description

This application uses a server to store e-commerce items and allows adding, updating, deleting, and viewing: categories, products, and tags.

## Built With

This application was built with MySQL2, Sequelize, dotenv, Express, and JavaScript. It was deployed through Heroku.

## Installation

Visit the link at https://ecommerce-bootcamp-hw.herokuapp.com. From there use an API like Insomnia to use requests to pull data.

![screenshot](./screenshots/1.png)

## Usage

The base URL for our requests is https://ecommerce-bootcamp-hw.herokuapp.com. For instance,  using a GET request at with the end point /api/categories/ (with the full URL actually being https://ecommerce-bootcamp-hw.herokuapp.com/api/categories/) will show all categories in the database.

![screenshot](./screenshots/2.png)

You can also view a specific category through a GET request by inputting it's id into the endpoint like so: /api/categories/5. Here we are viewing the category with the id 5.

![screenshot](./screenshots/3.png)

Making a POST request with the endpoint api/categories/ allows you to create a category. Please select JSON as the body type and include an object formatted like so:

{
	"category_name" : "insert a tag here!"
}

An ID will automatically generate for this category. In the screenshot, 6 is the assigned value for this category's id.

![screenshot](./screenshots/4.png)

You can update a category by specifying the ID at the end of the url. Here I am updating the category with the ID 5 to Summerwear.

![screenshot](./screenshots/5.png)

The update is reflected when viewing all categories in the first get route.

![screenshot](./screenshots/6.png)

You can also delete a category by id similar to the prior put request but as a delete method instead.

![screenshot](./screenshots/7.png)

Here are the databases before with the new category included.

![screenshot](./screenshots/8.png)

And then after.

![screenshot](./screenshots/9.png)

The product routes are similar but with the endpoint /api/product. 

Viewing all products:

![screenshot](./screenshots/10.png)

Viewing a product by ID:

![screenshot](./screenshots/11.png)

Creating a product:

![screenshot](./screenshots/12.png)

Updating a product by ID:

![screenshot](./screenshots/13.png)

Deleting a product

![screenshot](./screenshots/14.png)

The tags routes are similar but with the endpoint /api/tags. 

Viewing all tags:

![screenshot](./screenshots/15.png)

Viewing a tag by ID:

![screenshot](./screenshots/16.png)

Creating a tag:

![screenshot](./screenshots/17.png)

Updating a tag by ID:

![screenshot](./screenshots/18.png)

Deleting a tag

![screenshot](./screenshots/19.png)

## Future Updates

<ul>
  <li>Add, remove, and update values within the tables</li>
</ul>
