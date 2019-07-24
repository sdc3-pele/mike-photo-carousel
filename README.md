# WawaMelon

This is a "Photos" Module of WawaMelon.

## Related Modules

  - https://github.com/fec3-galadriel/Review-component
  - https://github.com/fec3-galadriel/matt-item-summary
  - https://github.com/fec3-galadriel/garrett-related-products


## Usage

Ensure you have mysql and node installed.
You can check by running the command which mysql/which node from inside the terminal.

Run in the different terminal windows within the root directory:
- "npm install"
- "npm run seed"
- "npm run start:dev"
- "npm run react:dev"

## Api
GET /api/photos/:id
get json object array of photo url for item with given id

POST /api/photos/
add new json object of an array of photo urls to the database, respond with posted json array

PUT /api/photos/:id
update database at index 'id' with provided array of urls, respond with updated json array

DELETE /api/photos/:id
remove item at index 'id', respond with removed json array
