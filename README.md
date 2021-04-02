# pgranate-cheatsheets

Compact &amp; Comprehensive cheat sheets for Developers, who value their screen space. Usage: one scenario is to dock it to the left/right as in this [screenshot](usage.png). Use Control+F, or Command+F for search.

(Super early version, updated everyday)

## Python 3

### Strings

```python
# Basics - strings are immutable,
# you change them by making a copy.
# swap ! with ok:
s = 'change --> ! <--'
s_new = s[:11] + 'ok' + s[12:]
print(s_new) #  change --> ok <--

print('012345'[2:4]) #  23
print('012345'[::-1]) #  543210
print('Hello'.upper()) #  HELLO
print('Hello'.lower()) #  hello
print('abc'.capitalize()) # Abc
print('abc'.title()) # Abc

# replace AB with FF
print('AB --> FF'.replace('AB', "FF"))
# remove whitespace at the beginning
print(' <--Remove-space'.strip())
# split string using delimiter ,
print('Split here-->, OK'.split(','))

print('-'.join('abc')) #  a-b-c
```

```python
# String Validators
'abc123'.isalnum() == True #  (a-z, A-Z and 0-9)
'abc123!'.isalnum() == False

'abc'.isalpha() == True # (a-z and A-Z)
'abc123'.isalpha() == False #

'123'.isdigit() == True # (0-9)
'123abc'.isalpha() == False

'ab12!$'.islower() == True #  (a-z)
'Ab12!$'.islower() == False

'AB12!$'.islower() == True #  (A-Z)
'Ab12!$'.islower() == False

# Escape characters
print('Escape \'qoutes\'!')
print('Escape\\Backslash')
print('line1-->\n<--line2')
print('Tab-->\t------')
print('Hex value --> \x48')
```

```python
# f-string
print(f'1, {1+1}, {3:.2f}') #  1, 2, 3.00
print(f'grouping:{1000000:,.2f}') #  1,000,000.00
print(f'binary of 20:{20:b}') #  binary:10100
print(f'octal of 20:{20:o}') #  octal:24
print(f'hexadecimal of 20:{20:x}') #  hexadecimal:14
print(f'Scientific notation:{345600000000:e}')
# Scientific notation:3.456000e+11

print(f'precentage:{0.25:.0%}') #  precentage:25%

print(f'{"Width":10}|<--To here')
# Width     |<--To here

print(f'{"align-right":->20}')
# ---------align-right

print(f'{"align-left":-<20}')
# align-left----------

print(f'{"align-center":-^20}')
# ----align-center----
```

### Lists

```python
# Basics - used when order is needed.
# ['lists', 'are', '0-indexed']
# [   0   ,   1  ,       2    ]
print(['Print', 'second'][1]) #  second

sample_list = ['one', 'two', 'three', 4, 'five']
sample_list[1] = 2 #  replace value 'two' to 2
sample_list.insert(1, [1.50, 1.25, 1.75])
sample_list.append(6) #  adds 6 to the end

sample_list.index('one') #  returns an index of 'one'
sample_list.count('two') #  1 occurence of 'two'

new_list = ['seven', 'eight']
sample_list.extend(new_list) #  merge two lists

sample_list.remove('eight') #  removes 'eight'
sample_list.pop(7) #  removes item at index 7
sample_list.pop() #  removes last item in list
del sample_list[3] #  removes item at index 6

cc_sample_list = sample_list.copy() #  copy list
```

```python
# Access each item in the list
s_list = [1, 2, 3]
for i in s_list:
    print(i, end='-') #  prints 1-2-3-

# list comprehensions
x = [i for i in range(1, 6)] #  [1, 2, 3, 4, 5]

# List negative index (reverse sequence)
print(x[::-1]) #  [5, 4, 3, 2, 1]

# List comprehensions combos
y = [(a,b) for a in [1,2] for b in [3,4] if a!=b]
# [(1, 3), (1, 4), (2, 3), (2, 4)]

# Nested list comprehensions
b = [[i for i in range(3)] for _ in  range(3)]
# [[0, 1, 2], [0, 1, 2], [0, 1, 2]]

s_list.sort() #  [1.25, 1.50, 1.75]
s_list.sort(reverse=True) #  [1.75, 1.5, 1.25]
s_list.reverse() #  [1.75, 1.5, 1.25]
```

### Dictionaries

```python
# Basics - {a: 'index', b: 'by', c: 'keys'}
# {'3.7>': 'dictionaries are ordered', 'Unique': 'Keys'}
smpl_dict = {'a':1, 'b':2, 'c':3, 'd':1}
print(smpl_dict['a']) #  1

print(smpl_dict.keys())
# dict_keys(['a', 'b', 'c', 'd'])

print(smpl_dict.values())
#  dict_values([1, 2, 3, 1])

smpl_dict['d'] = 4 #  assign new value
print(smpl_dict.items()) #  returns as tuple

another_dict = {'d':5, 'e':6}
smpl_dict.update(another_dict) #  updates & adds
smpl_dict.pop('e') #  removes a specified item

del smpl_dict['a'] #  deletes a specified item

#  make a copy of the dict
new_dict = dict(another_dict)
```

```python
# Create dictionary from keys and remove duplicates
duplicate_keys = [1,1,1,1,2]
remove_duplicates = dict.fromkeys(duplicate_keys, 0)
# {1: 0, 2: 0}

if 'b' in {'a':1, 'b':2}: #  check if key exsists
    print('b is found') #  b is found

for i in {'a':1, 'b':2}: #  loop through keys
    print(i) #  a \n b

for i in {'a':1, 'b':2}: #  loop through values
    print({'a':1, 'b':2}[i]) #  1 \n 2

for i,j in {'A':'B', 'C':'D'}.items():
    print(i, j, end=' ') #  A B C D

# Construct dictionary
x = dict([('a', 1), ('b', 2)]) #  {'a': 1, 'b': 2}

# Dictionary comprehensions
c = {x: x+2 for x in range(3)} #  {0: 2, 1: 3, 2: 4}
```

### Tuples

```python
# Basics - used when data should not be changed.
# Ordered. Unchangeable. Allow Duplicates.
s = ('a', 'b', 'c', 1, 'd', 12)
a = ("a",) #  Use comma to create one element
k = tuple(('a', 'b')) #  Double round-brackets
print(s[1]) #  b
if 'a' in s: print('True') #  True

# Insert new value to the tuple
x = list(s) #  Convert to list
x[0] = '1' #  Assign the value
z = tuple(x) #  Convert back to tuple

(a,s,d) = ('one', 'two', 'three') #  one two three

# Assign rest of the values using Asterisk*
(a,*s) = ('one', 'two', 'three') # one ['two', 'three']

for i in ('a', 'b', 'c'): #  Access using loop:
    print(i, end=' ') #  a b c

joint_tuples = ('a', 'b') + ('c',) #  ('a', 'b', 'c')
```

### Sets

```python
# Basics - used when no order or no dublicates needed.
# Unordered. Duplicates Not Allowed. Unchangeable.
new_set = set() #  Creates new set or {1,2,3}
new_set.add('a') #  Adds to the random index

# Create another set
secnd = {'b','c'}
# Merge two sets
new_set.update(secnd) #   {'b', 'a', 'c'}

# Items can be removed two ways:
# new_set.remove('e') #  raises a KeyError (if e is none)
new_set.discard('e') #  DOESN'T raise an error

# Combine two sets
third = new_set.union(secnd) # or first | secnd
# Can be accessed with a loop
for i in new_set:
    print(i, end=" ") #  b a c

# Check if value is in set
print('a' in new_set) #  True
```

```python
# Find differences with pre-built set functions:

# Creates new set with redundant values - {3, 'a'}
rs = {1,2,3,'a'}.intersection({'a',3,4,5}) #  or A & B
# Updates exsisting set with redundant values
rs.intersection_update({1,2,3}) #  {3}

# Creates new set with unique values from both sets - {1, 4}
us = {1,2,3}.symmetric_difference({2,3,4}) #  or A ^ B
# Updates existing set with unique values
us.symmetric_difference_update({'a',1}) #  {4, 'a'}

# Creates a difference between two sets - {1, 2}
ds = {1,2,3}.difference({3,4}) #  or A - B
# Updates existing with a difference
ds.difference_update({2,3}) #  {1}

# Returns True if all items are the same in both sets
sub_s = {1,2,3}.issubset({2,1,3}) #  True

# Returns True if some items are the same in first set
sup_s = {1,2,3,4,5}.issuperset({2,1,3}) #  True
```

### if.. try.. for.. while..

```python
# If used for conditional execution
if 5 == 5 and 4 != 5 or 3 >= 2:
    print('Roses are red')
elif 2 > 1 < 3: # two is more than one less than three
    print('Violets are blue')
else:
    print('I don\'t sleep at night')

if 1 == 1: print("true") #  Shorthand one-liners
# Shorthand one-liners with else
print('2 is qual 2') if 2 == 2 else print('false')

# Try used for catching and handling exceptions
k = [1, 2]
try:
    print(k[1000]) #  should raise IndexError
except IndexError: #  Catches error
    print('Index error') #  handling exception
else:
    print('prints if no error found')
finally:
    print('this code is always be printed')
```

```python
# For loop used to iterate over the element of a seq.
for x in range(1,4):
    print(x, end='')
else: #  Optional (always initiated at the end of loop)
    print(' The End!') # 123 The End!

# Add index to the loop
for i,x in enumerate(['a', 'b', 'c']):
    print(f'{i}-{x}', end=' ') #  0-a 1-b 2-c

# Sorts and removes duplicates
for x in sorted(set(['a', 'b', 'a', 'c', 'b'])):
    print(x, end=' ') #  a b c

#  Loop in conjunction using zip function
for x,y in zip([1, 2, 3], ['a', 'b', 'c']):
    print(f'{x}:{y}', end=' ') #  1:a 2:b 3:c

for i in 'one      two three   words'.split():
    if i == 'two':
        continue #  Skipping loop
    print(i, end=' | ') #  one | two | three | words |
```

```python
# While loop used for repeated execution as long as True
x = 0
while True: #  use with caution (always set the break)
    x += 1 #  0+1+1+1
    if x == 3:
        break #  exits the loop

# Continously enter a number or type exit to break
x = 1
while x == 1:
    num = input("Enter a number or type exit:")
    if num == 'exit':
        break
    print('You have entered a number:', num)

# print index:letter
s = ['a', 'b', 'c']
i = 0
while i != len(s):
    print(f'{i}:{s[i]}', end=' ')
    i += 1
# 0:a 1:b 2:c
```

### Class

```python
# Bundle data and functionality together
class ClassName:
    '''Most basic example of class'''
    pass
# Creates a new instance and assigns to a variable:
a = ClassName()
print(a.__doc__) #  A simple example class

class Person:
    ''' Basic example including init and method '''
    def __init__(self, name, height):
        print(f'We are initializing class...')
        self.name = name
        self.height = height
    age = 0
    def say_hello(self):
        return f'Hello {self.name}'

x = Person('John', 185) #  We are initializing class...
x.age = 34 #  set age to 34
print(x.say_hello()) #  Hello John
vars(x) #  {'name': 'John', 'height': 185, 'age': 34}
```

### Files

### Built-in functions

```python
# Abs(number) return absolute value
abs(-10) #  10
abs(10) #  10

# Enumerate(iter, [start number]) object
x = enumerate(['a', 'b', 'c'])
list(x) #  [(0, 'a'), (1, 'b'), (2, 'c')]

# Filter(func, iter) tests each iterable True or not
def less_than_zero(a):
    return a < 0
x = filter(less_than_zero, [1, 2, -1, -3])
list(x) #  [-1, -3]

# Len(object) returns the length of an object
len('abcd') #  4

# Map(func, iter) returns an iterable to every item
def add(arg):
    return arg + 'xyz'
x = map(add, ['a', 'b', 'c'])
list(x) #  ['axyz', 'bxyz', 'cxyz']
```

```python
# Max(iter, [key]), Min(n1,n2.., [key])
# Returns largest/smallest number in a given sequence
max([1, 2, 33, 44]) #  44
max('a', 'ab', 'abc', key = len) #  abc
min([1, 2, 33, 44]) #  1

# Range([start], stop, [step]) creates a sequence
list(range(5)) #  [0, 1, 2, 3, 4]
list(range(0, 10, 3)) #  [0, 3, 6, 9]
list(range(0, -5, -1)) #  [0, -1, -2, -3, -4]

# Reversed(sequence) returns reversed iterator
list(reversed('abc')) #  ['c', 'b', 'a']

# Sum(iter, [start]) returns sum of all items
sum([2, 2, 2]) #  6
sum([2, 2, 2], 6) #  12

# Zip(list1, list2, [list3...]) combines two lists
list(zip(['a', 'b'], [1, 2])) #  [('a', 1), ('b', 2)]

type(123) #  <class 'int'>
```

```python
# Sorted(iter, [key], [reverse])
# builds a new sorted list from an iterable
print(sorted(['b', 'a', 'c'])) #  ['a', 'b', 'c']

# Sort by dictionary values
x = {'a': 2, 'b': 1, 'c': 3}
x_result = sorted(x.items(), key=lambda a: a[1])
print(x_result) #  [('b', 1), ('a', 2), ('c', 3)]

# Sort by dictionary values (Output values)
sorted({'a': 2, 'b': 1, 'c': 3}.values()) #  [1, 2, 3]

# Sort by remainder 3
sorted([4, 3, 2], key=lambda a : a % 3) #  [3, 4, 2]

# Sort by length
sorted(['aaa', 'a', 'a'], key=len) # ['a', 'a', 'aaa']

# Sort by last letter
def fnc(a):
    return a[-1]
sorted(['sb', 'fa', 'xc'], key=fnc) # ['fa', 'sb', 'xc']
```

### Summary coding conventions pep-0008

```python
# Style Guide for Python Code - PEP 8
# Limit all lines to a maximum of 79 characters
# Docstrings/comments to 72.
# Filename naming - multiply_number.py

my_ugly_variable = 1 #  Use informative variables
SAMPLE_CONSTANT = 1 #  Constants from uppercase
for i in string:
    print(i)  # 4-space identation.

# Class names normally use the CapWords convention
class MyClass: ...
# Informative function naming:
def sums_all_numbers(
      var_1, var_2, var_3=1, # no space arround =
      var_4):  # Add 4-spaces to distinguish level below
  """Explain what this f-tion does in one-line"""
  return var_1 + var_2 + var_3 + var_4

# Aligned with opening delimiter.
foo = lg_fnc_n(var_1, var_2,
               var_3, var_4)
```

```python
# Space between operand (=+) and operator (i)
i = i + 1
submitted += 1  # No space between operator

x = x*2 - 1  # No space around multiply/divide
hypot2 = x*x + y*y
c = (a+b) * (a-b)
result = some_function(
    1, 2, 3,
    4, 5, 6
)  # Lined up with the first character

# Use backslashes with long, multiple with-statements:
with open('/path/to/some/file/read') as file_1, \
     open('/path/to/some/file/write', 'w') as file_2:
    file_2.write(file_1.read())
# Easy to match operators with operands:
result = (salary
          + bonus_sales,
          + (dividends - qualified_dividends),
          - ira
          - loan_interest)
```
