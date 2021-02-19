# pgranate-cheatsheets

Compact &amp; Comprehensive cheat sheets for Developers, who value their screen space.

## Python 3

### Built-in functions

### Strings

### Lists

### Dictionaries

### Tuples

### Sets

### Loops

### Conditional

### Exceptions

### Class

###

### Files

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
