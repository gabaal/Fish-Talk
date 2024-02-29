Build a comment form
Overview
You've built a simple blog, your task now is to embellish it. Use database relationships to add a comments table. Add categories and tags to your posts. Add a form to create new comments. Add an edit page that populates the form with the post data and allows you save changes to the database.

You can use Vercel Postgres or Supabase, so long as Postgres is the database.

User Stories
As a user, I want to browse a list of posts, sortable by ascending or descending order
As a user, I want to see a list of categories, and click on a category to see a list of posts in that category
As a user, I want to be able to leave a comment sharing my thoughts on each post
Requirements
IMPORTANT: You don't have to make a generic blog with posts. It can be ANYTHING! So long as you are able to comment on it, it could be recipes, reviews, products, job listings, podcast episodes, movies etc etc etc

Created using create-next-app

Design a SQL schema for a posts table, and a comments table that has a post_id column connecting it to the posts table.

Either create a form where users can add posts OR seed your database with at least 4 posts that comments can be added to (if you do the seed, one of the stretch goals will be harder).

Add a form to the individual post page to allow creating a new comment, which is saved to the new comments table including the Post ID.

Refresh the /posts route data when adding a new post, and redirect the user to the list of posts

Refresh the /post/:postId route when adding a new comment, so the new comment is displayed on the page

Stretch Goals
Add a categories table to allow categorisation of posts at creation time using a dropdown menu. Add a /categories route that lists all categories, and a /categories/:id route that lists all posts in a category.

Add a new /posts/:id/edit route that allows editing a post. Populate the form with the post data, and save changes by updating the post in the database with a server action.

Add a delete button to the post page that removes the post from the database.

Add a new /posts/:id/comments/:id/edit route that allows editing a comment. Populate the form with the comment data, and save changes by updating the comment in the database with a server action.