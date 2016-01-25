API PROJECT: Timestamp Microservice

Pass a string as a parameter, and the API will check to see if it is a date.

The string can be a natural language date (for example, January 25, 2016) or a Unix timestamp.

The API will then return a JSON object with both the Unix timestamp and the natural language date.

Example usage:

https://fcc-timestamp-ms-frankmoisan.herokuapp.com/January%2025,%202016  
https://fcc-timestamp-ms-frankmoisan.herokuapp.com/1453680000000

Example output:

{"unix":1453680000000,"natural":"January 25, 2016"}