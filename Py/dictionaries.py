from traceback import print_tb


product = {
    "name": "book",
    "quantity": 3,
    "price": 4.99
}

person = {
    "first_name": "Alex", #las claves siempre en dobles comillas
    "last_name": "Grim"
}

print(type(product))
print(type(person))

print(person.keys())
print(person.items())

person.clear()
print(person)

products = [
    {"name": 'Book',
     "price": 10.99},
    {"name": 'Laptop',
     "price": 1000}
]
print(products)