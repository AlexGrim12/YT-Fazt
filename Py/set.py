from turtle import color

from pyparsing import col


colors = {'Red', 'Green', 'Blue'}

print(colors)
print('Red' in colors)
colors.add('Violet')
print(colors)
colors.remove('Red')
print(colors)

colors.clear() # Lo limpia
print(colors)
del colors # Elimina el set por completo