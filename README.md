# FidZulu-Books-API
API to return book details

## Endpoints:
1. *localhost:3032/books?location=<location_code>*
   - Default will return location=US-NC
   - Locations:
      - US-NC
      - IN
      - IE
2. *localhost:3032/team*

## Sample response object - /books:
```
{
  "Title": "Lord of the Rings",
  "Author": "J.R.R Tolkien",
  "price": "28.07",
  "ISBN": "9780261102385",
  "publisher": "HarperCollins"
}
```

## Response object - /team:
```
{
    "team": "Hippopotomonstrosesquippedaliophobia",
    "membersNames": [
        "Mihir Soni",
        "Vaibhav Rajendra Agrawal",
        "Rachana P Bennur"
    ]
}
```
