from importlib.machinery import all_suffixes


myStr = "hello world,home"

# Opciones de metodos para esta variable
print(dir(myStr)) 

# Mayúsculas
print(myStr.upper())

# Minúsculas
print(myStr.lower())

# Cambia las mayusculas por minúsculas y biceversa
print(myStr.swapcase())

# Primera letra con mayúscula
print(myStr.capitalize())

# Remplaza texto + metodo para mayúsculas
print(myStr.replace('hello', 'bye').upper())

# Contador de caracteres
print(myStr.count(' '))

# Empieza con los caracteres el str? t/f
print(myStr.startswith('hello'))

# Termina con los caracteres el str? t/f
print(myStr.endswith('orld'))

# Separa el str conforme los espacios (default) o alguún caracter dado
print(myStr.split(','))

# Dice la posición del caracter 0-1-2-3...
print(myStr.find('o'))

# Longitud de un str 1-2-3...
print(len(myStr))

# Indice de un carater
print(myStr.index('e'))

# Saber si el str es numérico
print(myStr.isnumeric())

# Saber si el str es numérico
print(myStr.isalpha())

# Imprimir solo el/los caracter/es seleccionado/S
print(myStr[4])
# Orden inverso
print(myStr[-1])

# Concatenación
name= 'Alex'
print("My name is " + name)
print(f"my name is {name}")
print("My name is {0}".format(name))