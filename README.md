# Build a comment form

## Overview
You've built a simple blog, your task now is to embellish it. Use database relationships to add a comments table. Add categories and tags to your posts. Add a form to create new comments. Add an edit page that populates the form with the post data and allows you save changes to the database.

You can use Vercel Postgres or Supabase, so long as Postgres is the database.

## User Stories
- [x] As a user, I want to browse a list of posts, sortable by ascending or descending order
- [x] As a user, I want to see a list of categories, and click on a category to see a list of posts in that category
- [x] As a user, I want to be able to leave a comment sharing my thoughts on each post

Requirements
IMPORTANT: You don't have to make a generic blog with posts. It can be ANYTHING! So long as you are able to comment on it, it could be recipes, reviews, products, job listings, podcast episodes, movies etc etc etc

Created using create-next-app

- [x] Design a SQL schema for a posts table, and a comments table that has a post_id column connecting it to the posts table.

- [x] Either create a form where users can add posts OR seed your database with at least 4 posts that comments can be added to (if you do the seed, one of the stretch goals will be harder).

- [x] Add a form to the individual post page to allow creating a new comment, which is saved to the new comments table including the Post ID.

- [x] Refresh the /posts route data when adding a new post, and redirect the user to the list of posts

- [x] Refresh the /post/:postId route when adding a new comment, so the new comment is displayed on the page

## Stretch Goals

- [ ] Add a categories table to allow categorisation of posts at creation time using a dropdown menu. Add a /categories route that lists all categories, and a /categories/:id route that lists all posts in a category.

- [ ] Add a new /posts/:id/edit route that allows editing a post. Populate the form with the post data, and save changes by updating the post in the database with a server action.

- [ ] Add a delete button to the post page that removes the post from the database.

- [ ] Add a new /posts/:id/comments/:id/edit route that allows editing a comment. Populate the form with the comment data, and save changes by updating the comment in the database with a server action.


## create tables SQL:

CREATE TABLE categories (
    category_id SERIAL PRIMARY KEY,
    category VARCHAR(50) NOT NULL
);

CREATE TABLE posts (
    post_id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    content TEXT NOT NULL,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
);

CREATE TABLE comments (
    comment_id SERIAL PRIMARY KEY,
    post_id INT,
    comment_text TEXT NOT NULL,
    FOREIGN KEY (post_id) REFERENCES posts(post_id)
);

## And seed for testing:

### Inserting categories
INSERT INTO categories (category) VALUES ('fish'), ('plants'), ('aquariums'), ('Equipment');

### Inserting posts for the "fish" category
INSERT INTO posts (title, content, category_id) 
VALUES 
('Types of Fish', 'Learn about different types of fish for your aquarium. Quisque id diam vel quam elementum pulvinar. At risus viverra adipiscing at in tellus integer feugiat scelerisque.', (SELECT category_id FROM categories WHERE category = 'fish')),
('Feeding Fish', 'Tips and tricks for feeding your fish. Quisque id diam vel quam elementum pulvinar. At risus viverra adipiscing at in tellus integer feugiat scelerisque.', (SELECT category_id FROM categories WHERE category = 'fish'));

### Inserting posts for the "plants" category
INSERT INTO posts (title, content, category_id) 
VALUES 
('Aquarium Plants Guide', 'A comprehensive guide to aquarium plants. Quisque id diam vel quam elementum pulvinar. At risus viverra adipiscing at in tellus integer feugiat scelerisque.', (SELECT category_id FROM categories WHERE category = 'plants')),
('Plant Care', 'Tips for maintaining healthy aquarium plants. Nullam eget felis eget nunc.', (SELECT category_id FROM categories WHERE category = 'plants'));

### Inserting posts for the "aquariums" category
INSERT INTO posts (title, content, category_id) 
VALUES 
('Choosing an Aquarium', 'Factors to consider when selecting an aquarium. Vitae justo eget magna fermentum iaculis eu non diam. Convallis convallis tellus id interdum velit laoreet id. Hendrerit gravida rutrum quisque non tellus orci ac auctor. ', (SELECT category_id FROM categories WHERE category = 'aquariums')),
('Aquarium Setup', 'Guide to setting up your aquarium. At ultrices mi tempus imperdiet nulla malesuada pellentesque.', (SELECT category_id FROM categories WHERE category = 'aquariums'));

### Add comments to posts for the "fish" category
INSERT INTO comments (post_id, comment_text) 
VALUES 
((SELECT post_id FROM posts WHERE title = 'Types of Fish'), 'Great information, thanks for sharing! Dui vivamus arcu felis bibendum ut tristique et egestas quis. Felis imperdiet proin fermentum leo vel orci porta non pulvinar. Lorem ipsum dolor sit amet consectetur adipiscing elit.'),
((SELECT post_id FROM posts WHERE title = 'Types of Fish'), 'I have a question about freshwater fish. Eget mi proin sed libero enim sed. Lacus vestibulum sed arcu non odio.');

INSERT INTO comments (post_id, comment_text) 
VALUES 
((SELECT post_id FROM posts WHERE title = 'Feeding Fish'), 'Very helpful tips, especially for beginners! Justo eget magna fermentum iaculis eu non. Scelerisque eleifend donec pretium vulputate sapien nec. Nulla facilisi cras fermentum odio. Augue mauris augue neque gravida in.'),
((SELECT post_id FROM posts WHERE title = 'Feeding Fish'), 'Do you have any recommendations for feeding tropical fish? Sit amet tellus cras adipiscing. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Quam vulputate dignissim suspendisse in est. Mauris ultrices eros in cursus.');

### Add comments to posts for the "plants" category
INSERT INTO comments (post_id, comment_text) 
VALUES 
((SELECT post_id FROM posts WHERE title = 'Aquarium Plants Guide'), 'I didn't know there were so many types of aquarium plants!'),
((SELECT post_id FROM posts WHERE title = 'Aquarium Plants Guide'), 'This guide is exactly what I needed to get started with aquarium plants.');

INSERT INTO comments (post_id, comment_text) 
VALUES 
((SELECT post_id FROM posts WHERE title = 'Plant Care'), 'How often should I trim my aquarium plants? Morbi tristique senectus et netus et malesuada fames. Sit amet mauris commodo quis imperdiet massa. Nam at lectus urna duis convallis convallis tellus.'),
((SELECT post_id FROM posts WHERE title = 'Plant Care'), 'Whats the best way to deal with algae in a planted tank? Nibh tortor id aliquet lectus proin. Leo vel orci porta non pulvinar neque laoreet suspendisse interdum. Tellus molestie nunc non blandit massa. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.');

### Add comments to posts for the "aquariums" category
INSERT INTO comments (post_id, comment_text) 
VALUES 
((SELECT post_id FROM posts WHERE title = 'Choosing an Aquarium'), 'I never thought about the importance of tank size before. Natoque penatibus et magnis dis parturient.'),
((SELECT post_id FROM posts WHERE title = 'Choosing an Aquarium'), 'What size tank do you recommend for beginners? Non enim praesent elementum facilisis. Imperdiet dui accumsan sit amet nulla facilisi. Iaculis at erat pellentesque adipiscing commodo. Urna nec tincidunt praesent semper feugiat nibh. Urna porttitor rhoncus dolor purus non. Ornare lectus sit amet est placerat in egestas.');

INSERT INTO comments (post_id, comment_text) 
VALUES 
((SELECT post_id FROM posts WHERE title = 'Aquarium Setup'), 'This guide made setting up my first tank a breeze! Erat pellentesque adipiscing commodo elit at. Volutpat est velit egestas dui id ornare arcu odio.'),
((SELECT post_id FROM posts WHERE title = 'Aquarium Setup'), 'Do you have any tips for cycling a new aquarium? Magna fringilla urna porttitor rhoncus dolor purus. Aliquet lectus proin nibh nisl condimentum id venenatis a.');
