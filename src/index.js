const codeBlocks = [
  {
    id: 1,
    tags: "Strings",
    code_block: `# Basics
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
    print('-'.join('abc')) #  a-b-c`,
  },
  {
    id: 2,
    tags: "Strings",
    code_block: `# Basics
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
    print('-'.join('abc')) #  a-b-c`,
  },
  {
    id: 3,
    tags: "Strings",
    code_block: `# Basics
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
    print('-'.join('abc')) #  a-b-c`,
  },
];

// Select elements
const wrapper = document.querySelector(".wrapper");

// When window loads display items from array
window.addEventListener("DOMContentLoaded", () => {
  let displayCode = codeBlocks.map((item) => {
    // return `<p>123</p>`;
    return `<div class="code-block"><pre><code class="python">${item.code_block}</code></pre></div>`;
  });
  displayCode = displayCode.join("");
  console.log(displayCode);
  wrapper.innerHTML = displayCode;
});
