# pgranate-cheatsheets

Compact &amp; Comprehensive cheat sheets for Developers, who value their screen space. Usage: one scenario is to dock it to the left/right as in this [screenshot](usage.png). Use Control+F, or Command+F for search.

(Super early version, updated everyday)

## Python 3

### Strings

```python
# Basics
# Python strings are immutable,
# you change them by making a copy
s = 'change --> ! <--'
s_new = s[:11] + 'ok' + s[12:]
print(s_new) #  change --> ok <--

print('012345'[2:4]) #  23
print('012345'[::-1]) #  543210
print('Hello'.upper()) #  HELLO
print('Hello'.lower()) #  hello
print('abc'.capitalize()) # Abc
print('abc'.title()) # Abc
print('AB --> FF'.replace('AB', "FF"))
print(' <--Remove-space'.strip())
print('Split here-->, OK'.split(','))
print('-'.join('abc')) #  a-b-c
```

```python
# String Validators
'abc123'.isalnum() == True #  (a-z, A-Z and 0-9)
'abc123!'.isalnum() == False

'abc'.isalpha() == True # (a-z and A-Z)
'abc123'.isalpha() == False

'123'.isdigit() == True # (0-9)
'123abc'.isalpha() == False

'ab12!$'.islower() == True #  (a-z)
'Ab12!$'.islower() == False

'AB12!$'.islower() == True #  (A-Z)
'Ab12!$'.islower() == False
```

```python
# Escape characters
print('Escape \'qoutes\'!')
print('Escape\\Backslash')
print('line1-->\n<--line2')
print('Tab-->\t------')
print('Octal value --> \123')
print('Hex value --> \x48')
```

```python
# f-string
print(f'1, {1+1}, {3:.2f}')
print(f'grouping:{1000000:,.2f}')
print(f'binary:{20:b}, octal:{20:o}')
print(f'hexadecimal:{20:x}')
print(f'scientific notation:{345600000000:e}')
print(f'precentage:{0.25:.0%}')
print(f'{"Width":10}|<--To here')
print(f'{"align-right":->20}')
print(f'{"align-left":-<20}')
print(f'{"align-center":-^20}')
```

### Lists

```python
# Basics
# ['lists', 'are', '0-indexed']
# [   0   ,   1  ,       2    ]
print(['Print', 'second'][1])
sample_list = ['one', 'two', 'three', 4, 'five']
sample_list[1] = 2 #  assign new value
sample_list.insert(1, [1.50, 1.25, 1.75])
sample_list.append(6) #  adds to the end
sample_list.index('one') #  returns an index
sample_list.count('two') #  1 occurence of 'two
new_list = ['seven', 'eight']
sample_list.extend(new_list) #  merge two lists
sample_list.remove('eight')
sample_list.pop(7) #  removes at index or last
del sample_list[6] #  removes at given index
cc_sample_list = sample_list.copy() #  copy list

# Access each item in the list
for i in sample_list:
    print(i) #  prints each item
this_list = [1, 2, 3, 4, 5]
```

```python
# use list comprehensions
print([i for i in range(1, 6)]) #  [1, 2, 3, 4, 5]
```

```python
# Sorting
sample_list[1].sort() #  [1.25, 1.50, 1.75]
sample_list[1].sort(reverse=True) #  [1.75, 1.5, 1.25]
sample_list[1].reverse() #  [1.75, 1.5, 1.25]
print(sample_list[1])
```

### Dictionaries

```python
# Basics
# {'3.7>': 'are dictionaries ordered', 'Unique': 'Keys'}
smpl_dict = {'a':1, 'b':2, 'c':3, 'd':1}
print(smpl_dict['a']) #  1
print(smpl_dict.keys()) #  dict_keys(['a', 'b', 'c', 'd'])
print(smpl_dict.values()) #  dict_values([1, 2, 3, 1])
smpl_dict['d'] = 4 #  assign new value
print(smpl_dict.items()) #  returns as tuple
another_dict = {'d':5, 'e':6}
smpl_dict.update(another_dict) #  updates & adds
smpl_dict.pop('e') #  removes a specified item
del smpl_dict['a'] #  also removes a specified item
new_dict = dict(another_dict) #  make a copy of the dict
```

```python
# Create dictionary from keys and remove duplictes
duplicate_keys = [1,1,1,1,2]
remove_duplicates = dict.fromkeys(duplicate_keys, 0)
# remove_duplicates = {1: 0, 2: 0}
```

```python
if 'b' in smpl_dict: #  check if key exsists
    print(f'\'b\' = {smpl_dict["b"]}') #  'b' = 2

for i in smpl_dict: #  loop through keys
    print(i) #  b

for i in smpl_dict: #  loop through values
    print(smpl_dict[i]) #  2

for i,j in smpl_dict.items(): #  loop through both
    print(i, j) #  b 2
```

### Tuples

### Sets

```python
# Basics
# Unordered. Duplicates Not Allowed. Unchangeable.
first = set() #  creates new set or {1,2,3} but NOT {}
first.add('a')
secnd = {'b','c'}
first.update(secnd) #   {'b', 'a', 'c'}
```

```python
# Items can be removed two ways:
first.remove('e') #  raises a KeyError (if e is none)
first.discard('e') #  DOESN'T raise an error
```

```python
# Combine two sets
third = first.union(secnd) # or first | secnd
# Can be accessed only with a loop.
for i in first:
    print(i, end=" ") #  b a c
print('a' in first) #  True
```

```python
# Creates new set with redundant values - {3, 'a'}
rs = {1,2,3,'a'}.intersection({'a',3,4,5}) #  or A & B
# Updates exsisting set with redundant values
rs.intersection_update({1,2,3}) #  {3}
```

```python
# Creates new set with unique values from both sets - {1, 4}
us = {1,2,3}.symmetric_difference({2,3,4}) #  or A ^ B
# Updates existing set with unique values
us.symmetric_difference_update({'a',1}) #  {4, 'a'}
```

```python
# Creates a difference between two sets - {1, 2}
ds = {1,2,3}.difference({3,4}) #  or A - B
# Updates existing with a difference
ds.difference_update({2,3}) #  {1}
```

```python
# Returns True if all items are the same in both sets
sub_s = {1,2,3}.issubset({2,1,3}) #  True
```

```python
# Returns True if some items are the same in first set
sup_s = {1,2,3,4,5}.issuperset({2,1,3}) #  True
```

### Loops

### Conditional

### Exceptions

### Class

###

### Files

### Built-in functions

### Summary coding conventions pep-0008

```python
# Limit all lines to a maximum of 79 characters
# docstrings/comments to 72.
```

```python
# Naming convention
my_ugly_variable = 1
SAMPLE_CONSTANT = 1
class MyClass: ...
# multiply_number.py

def long_function_name(
        var_1, var_2, var_3=1, # no space arround =
        var_4):  # Add extra 4-spaces to distinguish level below
    """One-line Docstrings. Explaining what this f-tion does"""
    return var_1

for i in string:
    print(i)  # 4-space identation.

foo = long_function_name(var_one, var_two,     # Aligned with opening
                         var_three, var_four)  # for vertical alignment.
```

```python
i = i + 1
submitted += 1  # No space between operator
x = x*2 - 1  # No space around multiply/divide
hypot2 = x*x + y*y
c = (a+b) * (a-b)
```

```python
result = some_function(
    1, 2, 3,
    4, 5, 6
)  # Lined up with the first character
```

```python
# Backslashes with long, multiple with-statements.
with open('/path/to/some/file/read') as file_1, \
     open('/path/to/some/file/write', 'w') as file_2:
    file_2.write(file_1.read())
```

```python
# Easy to match operators with operands
result = (salary
          + bonus_sales,
          + bonus_staff,
          + (dividends - qualified_dividends),
          - ira
          - loan_interest)
```
