demo_list = [1, 'hello', 1.24, True, [1, 2, 3]]
colors = ['red', 'green', 'blue']

number_list = list((1, 2, 3, 4))

print(type(number_list))

r = list(range(1, 1001))

print(r)

print(type(colors))

print(dir(colors))

print(len(colors))

print(len(demo_list))

print(colors[0])

print('green' in colors)

print(colors)
colors[1] = "yellow"
print(colors)

print(dir(colors))

colors.append(['violet', 'yellow'])

print(colors)

colors.extend(['violet', 'yellow'])

colors.extend(['pink', 'purple'])

print(colors)