x = int(input('Write a number: '))

if x < 20:
    print("x is less than 20")
else:
    print("x is greater than 20")
    
color = 'Blue'

if color == 'Red':
    print('The color is Red')
elif color == 'Blue':
    print('The color is Blue')
else:
    print('Any color')

name = 'John'
lastname = 'Carter'

if name == 'John':
    if lastname == 'Carter':
        print('You are John Carter')
    else:
        print('You are not Jhon Carter')