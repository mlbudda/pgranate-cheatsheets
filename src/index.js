const codeBlocks = [
  {
    id: 1,
    tags: "Strings",
    code_block: `<code class="python hljs"><span class="hljs-comment"># Strings Basics</span>
<span class="hljs-comment"># Python strings are immutable,</span>
<span class="hljs-comment"># you change them by making a copy</span>
s = <span class="hljs-string">'change --&gt; ! &lt;--'</span>
s_new = s[:<span class="hljs-number">11</span>] + <span class="hljs-string">'ok'</span> + s[<span class="hljs-number">12</span>:]
print(s_new) <span class="hljs-comment">#  change --&gt; ok &lt;--</span>

print(<span class="hljs-string">'012345'</span>[<span class="hljs-number">2</span>:<span class="hljs-number">4</span>]) <span class="hljs-comment">#  23</span>
print(<span class="hljs-string">'012345'</span>[::-<span class="hljs-number">1</span>]) <span class="hljs-comment">#  543210</span>
print(<span class="hljs-string">'Hello'</span>.upper()) <span class="hljs-comment">#  HELLO</span>
print(<span class="hljs-string">'Hello'</span>.lower()) <span class="hljs-comment">#  hello</span>
print(<span class="hljs-string">'abc'</span>.capitalize()) <span class="hljs-comment"># Abc</span>
print(<span class="hljs-string">'abc'</span>.title()) <span class="hljs-comment"># Abc</span>
print(<span class="hljs-string">'AB --&gt; FF'</span>.replace(<span class="hljs-string">'AB'</span>, <span class="hljs-string">"FF"</span>))
print(<span class="hljs-string">' &lt;--Remove-space'</span>.strip())
print(<span class="hljs-string">'Split here--&gt;, OK'</span>.split(<span class="hljs-string">','</span>))
print(<span class="hljs-string">'-'</span>.join(<span class="hljs-string">'abc'</span>)) <span class="hljs-comment">#  a-b-c</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span></code>`,
  },
  {
    id: 2,
    tags: "Strings",
    code_block: `<code class="python hljs"><span class="hljs-comment"># String Validators</span>
<span class="hljs-string">'abc123'</span>.isalnum() == <span class="hljs-literal">True</span> <span class="hljs-comment">#  (a-z, A-Z and 0-9)</span>
<span class="hljs-string">'abc123!'</span>.isalnum() == <span class="hljs-literal">False</span>

<span class="hljs-string">'abc'</span>.isalpha() == <span class="hljs-literal">True</span> <span class="hljs-comment"># (a-z and A-Z)</span>
<span class="hljs-string">'abc123'</span>.isalpha() == <span class="hljs-literal">False</span>

<span class="hljs-string">'123'</span>.isdigit() == <span class="hljs-literal">True</span> <span class="hljs-comment"># (0-9)</span>
<span class="hljs-string">'123abc'</span>.isalpha() == <span class="hljs-literal">False</span>

<span class="hljs-string">'ab12!$'</span>.islower() == <span class="hljs-literal">True</span> <span class="hljs-comment">#  (a-z)</span>
<span class="hljs-string">'Ab12!$'</span>.islower() == <span class="hljs-literal">False</span>

<span class="hljs-string">'AB12!$'</span>.islower() == <span class="hljs-literal">True</span> <span class="hljs-comment">#  (A-Z)</span>
<span class="hljs-string">'Ab12!$'</span>.islower() == <span class="hljs-literal">False</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span></code>`,
  },
  {
    id: 3,
    tags: "Strings",
    code_block: `<code class="python hljs"><span class="hljs-comment"># f-string</span>
print(<span class="hljs-string">f'1, <span class="hljs-subst">{<span class="hljs-number">1</span>+<span class="hljs-number">1</span>}</span>, <span class="hljs-subst">{<span class="hljs-number">3</span>:<span class="hljs-number">.2</span>f}</span>'</span>)
print(<span class="hljs-string">f'grouping:<span class="hljs-subst">{<span class="hljs-number">1000000</span>:,<span class="hljs-number">.2</span>f}</span>'</span>)
print(<span class="hljs-string">f'binary:<span class="hljs-subst">{<span class="hljs-number">20</span>:b}</span>, octal:<span class="hljs-subst">{<span class="hljs-number">20</span>:o}</span>'</span>)
print(<span class="hljs-string">f'hexadecimal:<span class="hljs-subst">{<span class="hljs-number">20</span>:x}</span>'</span>)
print(<span class="hljs-string">f'scientific notation:<span class="hljs-subst">{<span class="hljs-number">345600000000</span>:e}</span>'</span>)
print(<span class="hljs-string">f'precentage:<span class="hljs-subst">{<span class="hljs-number">0.25</span>:<span class="hljs-number">.0</span>%}</span>'</span>)
print(<span class="hljs-string">f'<span class="hljs-subst">{<span class="hljs-string">"Width"</span>:<span class="hljs-number">10</span>}</span>|&lt;--To here'</span>)
print(<span class="hljs-string">f'<span class="hljs-subst">{<span class="hljs-string">"align-right"</span>:-&gt;<span class="hljs-number">20</span>}</span>'</span>)
print(<span class="hljs-string">f'<span class="hljs-subst">{<span class="hljs-string">"align-left"</span>:-&lt;<span class="hljs-number">20</span>}</span>'</span>)
print(<span class="hljs-string">f'<span class="hljs-subst">{<span class="hljs-string">"align-center"</span>:-^<span class="hljs-number">20</span>}</span>'</span>)
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span></code>`,
  },
  {
    id: 4,
    tags: "Lists",
    code_block: `<code class="python hljs"><span class="hljs-comment"># Lists Basics</span>
<span class="hljs-comment"># ['lists', 'are', '0-indexed']</span>
<span class="hljs-comment"># [   0   ,   1  ,       2    ]</span>
print([<span class="hljs-string">'Print'</span>, <span class="hljs-string">'second'</span>][<span class="hljs-number">1</span>])
sample_list = [<span class="hljs-string">'one'</span>, <span class="hljs-string">'two'</span>, <span class="hljs-string">'three'</span>, <span class="hljs-number">4</span>, <span class="hljs-string">'five'</span>]
sample_list[<span class="hljs-number">1</span>] = <span class="hljs-number">2</span> <span class="hljs-comment">#  assign new value</span>
sample_list.insert(<span class="hljs-number">1</span>, [<span class="hljs-number">1.50</span>, <span class="hljs-number">1.25</span>, <span class="hljs-number">1.75</span>])
sample_list.append(<span class="hljs-number">6</span>) <span class="hljs-comment">#  adds to the end</span>
sample_list.index(<span class="hljs-string">'one'</span>) <span class="hljs-comment">#  returns an index</span>
sample_list.count(<span class="hljs-string">'two'</span>) <span class="hljs-comment">#  1 occurence of 'two</span>
new_list = [<span class="hljs-string">'seven'</span>, <span class="hljs-string">'eight'</span>]
sample_list.extend(new_list) <span class="hljs-comment">#  merge two lists</span>
sample_list.remove(<span class="hljs-string">'eight'</span>)
sample_list.pop(<span class="hljs-number">7</span>) <span class="hljs-comment">#  removes at index or last</span>
<span class="hljs-keyword">del</span> sample_list[<span class="hljs-number">6</span>] <span class="hljs-comment">#  removes at given index</span>
cc_sample_list = sample_list.copy() <span class="hljs-comment">#  copy list</span>

<span class="hljs-comment"># Access each item in the list</span>
<span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> sample_list:
    print(i) <span class="hljs-comment">#  prints each item</span>
this_list = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>]</code>`,
  },
  {
    id: 5,
    tags: "Lists",
    code_block: `<code class="python hljs"><span class="hljs-comment"># use list comprehensions</span>
print([i <span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">1</span>, <span class="hljs-number">6</span>)]) <span class="hljs-comment">#  [1, 2, 3, 4, 5]</span>
<span class="hljs-comment"># Sorting</span>
sample_list[<span class="hljs-number">1</span>].sort() <span class="hljs-comment">#  [1.25, 1.50, 1.75]</span>
sample_list[<span class="hljs-number">1</span>].sort(reverse=<span class="hljs-literal">True</span>) <span class="hljs-comment">#  [1.75, 1.5, 1.25]</span>
sample_list[<span class="hljs-number">1</span>].reverse() <span class="hljs-comment">#  [1.75, 1.5, 1.25]</span>
print(sample_list[<span class="hljs-number">1</span>])
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span></code>`,
  },
  {
    id: 6,
    tags: "Dictionaries",
    code_block: `<code class="python hljs"><span class="hljs-comment"># Dictionaries Basics</span>
<span class="hljs-comment"># {'3.7&gt;': 'are dictionaries ordered', 'Unique': 'Keys'}</span>
smpl_dict = {<span class="hljs-string">'a'</span>:<span class="hljs-number">1</span>, <span class="hljs-string">'b'</span>:<span class="hljs-number">2</span>, <span class="hljs-string">'c'</span>:<span class="hljs-number">3</span>, <span class="hljs-string">'d'</span>:<span class="hljs-number">1</span>}
print(smpl_dict[<span class="hljs-string">'a'</span>]) <span class="hljs-comment">#  1</span>
print(smpl_dict.keys()) <span class="hljs-comment">#  dict_keys(['a', 'b', 'c', 'd'])</span>
print(smpl_dict.values()) <span class="hljs-comment">#  dict_values([1, 2, 3, 1])</span>
smpl_dict[<span class="hljs-string">'d'</span>] = <span class="hljs-number">4</span> <span class="hljs-comment">#  assign new value</span>
print(smpl_dict.items()) <span class="hljs-comment">#  returns as tuple</span>
another_dict = {<span class="hljs-string">'d'</span>:<span class="hljs-number">5</span>, <span class="hljs-string">'e'</span>:<span class="hljs-number">6</span>}
smpl_dict.update(another_dict) <span class="hljs-comment">#  updates &amp; adds</span>
smpl_dict.pop(<span class="hljs-string">'e'</span>) <span class="hljs-comment">#  removes a specified item</span>
<span class="hljs-keyword">del</span> smpl_dict[<span class="hljs-string">'a'</span>] <span class="hljs-comment">#  also removes a specified item</span>
new_dict = <span class="hljs-built_in">dict</span>(another_dict) <span class="hljs-comment">#  make a copy of the dict</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span></code>`,
  },
  {
    id: 7,
    tags: "Dictionaries",
    code_block: `<code class="python hljs"><span class="hljs-comment"># Create dictionary from keys and remove duplictes</span>
duplicate_keys = [<span class="hljs-number">1</span>,<span class="hljs-number">1</span>,<span class="hljs-number">1</span>,<span class="hljs-number">1</span>,<span class="hljs-number">2</span>]
remove_duplicates = <span class="hljs-built_in">dict</span>.fromkeys(duplicate_keys, <span class="hljs-number">0</span>)
<span class="hljs-comment"># remove_duplicates = {1: 0, 2: 0}</span>
<span class="hljs-keyword">if</span> <span class="hljs-string">'b'</span> <span class="hljs-keyword">in</span> smpl_dict: <span class="hljs-comment">#  check if key exsists</span>
print(<span class="hljs-string">f''</span><span class="hljs-string">b' = {smpl_dict["b"]}'</span>) <span class="hljs-comment">#  'b' = 2</span>

<span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> smpl_dict: <span class="hljs-comment">#  loop through keys</span>
print(i) <span class="hljs-comment">#  b</span>

<span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> smpl_dict: <span class="hljs-comment">#  loop through values</span>
print(smpl_dict[i]) <span class="hljs-comment">#  2</span>

<span class="hljs-keyword">for</span> i,j <span class="hljs-keyword">in</span> smpl_dict.items(): <span class="hljs-comment">#  loop through both</span>
print(i, j) <span class="hljs-comment">#  b 2</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span></code>`,
  },
  {
    id: 8,
    tags: "Tuples",
    code_block: `<code class="python hljs"><span class="hljs-comment"># Tuples Basics</span>
<span class="hljs-comment"># Ordered. Unchangeable. Allow Duplicates</span>
first_t = (<span class="hljs-string">'a'</span>, <span class="hljs-string">'b'</span>, <span class="hljs-string">'c'</span>, <span class="hljs-number">1</span>, <span class="hljs-string">'d'</span>, <span class="hljs-number">12</span>)
one_tuple = (<span class="hljs-string">"a"</span>,) <span class="hljs-comment">#  use comma to create one element</span>
convert = <span class="hljs-built_in">tuple</span>((<span class="hljs-string">'a'</span>, <span class="hljs-string">'b'</span>)) <span class="hljs-comment">#  ! double round-brackets</span>
print(first_t[<span class="hljs-number">1</span>]) <span class="hljs-comment">#  b</span>
<span class="hljs-keyword">if</span> <span class="hljs-string">'a'</span> <span class="hljs-keyword">in</span> first_t: print(<span class="hljs-string">'True'</span>) <span class="hljs-comment">#  finds value</span>

<span class="hljs-comment"># If you need to change tuple</span>
x = <span class="hljs-built_in">list</span>(first_t) <span class="hljs-comment">#  Convert to list</span>
x[<span class="hljs-number">0</span>] = <span class="hljs-string">'1'</span> <span class="hljs-comment">#  Assign the value</span>
z = <span class="hljs-built_in">tuple</span>(x) <span class="hljs-comment">#  Convert back to tuple</span>

<span class="hljs-comment"># Unpacking</span>
(a,s,d) = (<span class="hljs-string">'one'</span>, <span class="hljs-string">'two'</span>, <span class="hljs-string">'three'</span>) <span class="hljs-comment">#  one two three</span>

<span class="hljs-comment"># Assign rest of the values using Asterisk*</span>
(a,*s) = (<span class="hljs-string"><span class="hljs-string">'one'</span></span>, <span class="hljs-string">'two'</span>, <span class="hljs-string">'three'</span>) <span class="hljs-comment">#  one ['two', 'three']</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span></code>`,
  },
  {
    id: 9,
    tags: "Tuples",
    code_block: `<code class="python hljs"><span class="hljs-comment"># Access Tuples using loop:</span>
<span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> first_t:
    print(i, end=<span class="hljs-string">' '</span>) <span class="hljs-comment">#  a b c 1 d 12</span>

<span class="hljs-comment"># Join two tuples</span>
third_t = convert + one_tuple <span class="hljs-comment">#  ('a', 'b', 'a')</span>

<span class="hljs-comment"># Count elemets</span>
print(third_t.count(<span class="hljs-string">'a'</span>)) <span class="hljs-comment">#  2</span>

<span class="hljs-comment"># Index (raises an exception if the value is not found)</span>
print(third_t.index(<span class="hljs-string">'b'</span>)) <span class="hljs-comment">#  1</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span></code>`,
  },
  {
    id: 10,
    tags: "Sets",
    code_block: `<code class="python hljs"><span class="hljs-comment"># Sets Basics</span>
<span class="hljs-comment"># Unordered. Duplicates Not Allowed. Unchangeable.</span>
first = <span class="hljs-built_in">set</span>() <span class="hljs-comment">#  creates new set or {1,2,3} but NOT {}</span>
first.add(<span class="hljs-string">'a'</span>)
secnd = {<span class="hljs-string">'b'</span>,<span class="hljs-string">'c'</span>}
first.update(secnd) <span class="hljs-comment">#   {'b', 'a', 'c'}</span>
<span class="hljs-comment"># Items can be removed two ways:</span>
first.remove(<span class="hljs-string">'e'</span>) <span class="hljs-comment">#  raises a KeyError (if e is none)</span>
first.discard(<span class="hljs-string">'e'</span>) <span class="hljs-comment">#  DOESN'T raise an error</span>
<span class="hljs-comment"># Combine two sets</span>
third = first.union(secnd) <span class="hljs-comment"># or first | secnd</span>
<span class="hljs-comment"># Can be accessed only with a loop.</span>
<span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> first:
    print(i, end=<span class="hljs-string">" "</span>) <span class="hljs-comment">#  b a c</span>
print(<span class="hljs-string">'a'</span> <span class="hljs-keyword">in</span> first) <span class="hljs-comment">#  True</span>
<span class="hljs-comment"># Creates new set with redundant values - {3, 'a'}</span>
rs = {<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-string">'a'</span>}.intersection({<span class="hljs-string">'a'</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span>}) <span class="hljs-comment">#  or A &amp; B</span>
<span class="hljs-comment"># Updates exsisting set with redundant values</span>
rs.intersection_update({<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>}) <span class="hljs-comment">#  {3}</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span></code>`,
  },
  {
    id: 11,
    tags: "Sets",
    code_block: `<code class="python hljs"><span class="hljs-comment"># New set with unique values from both sets - {1, 4}</span>
us = {<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>}.symmetric_difference({<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>}) <span class="hljs-comment">#  or A ^ B</span>
<span class="hljs-comment"># Updates existing set with unique values</span>
us.symmetric_difference_update({<span class="hljs-string">'a'</span>,<span class="hljs-number">1</span>}) <span class="hljs-comment">#  {4, 'a'}</span>
<span class="hljs-comment"># Creates a difference between two sets - {1, 2}</span>
ds = {<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>}.difference({<span class="hljs-number">3</span>,<span class="hljs-number">4</span>}) <span class="hljs-comment">#  or A - B</span>
<span class="hljs-comment"># Updates existing with a difference</span>
ds.difference_update({<span class="hljs-number">2</span>,<span class="hljs-number">3</span>}) <span class="hljs-comment">#  {1}</span>
<span class="hljs-comment"># Returns True if all items are the same in both sets</span>
sub_s = {<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>}.issubset({<span class="hljs-number">2</span>,<span class="hljs-number">1</span>,<span class="hljs-number">3</span>}) <span class="hljs-comment">#  True</span>
<span class="hljs-comment"># Returns True if some items are the same in first set</span>
sup_s = {<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span>}.issuperset({<span class="hljs-number">2</span>,<span class="hljs-number">1</span>,<span class="hljs-number">3</span>}) <span class="hljs-comment">#  True</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span></code>`,
  },
  {
    id: 12,
    tags: "pep-0008",
    code_block: `<code class="python hljs"><span class="hljs-comment"># Naming convention</span>
<span class="hljs-comment"># Limit all lines to a maximum of 79 characters</span>
<span class="hljs-comment"># docstrings/comments to 72.</span>
my_ugly_variable = <span class="hljs-number">1</span>
SAMPLE_CONSTANT = <span class="hljs-number">1</span>
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">MyClass</span>:</span> ...
<span class="hljs-comment"># multiply_number.py</span>

<span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">lg_fnc_n</span>(<span class="hljs-params">
      var_1, var_2, var_3=<span class="hljs-number">1</span>, <span class="hljs-comment"># no space arround =</span>
      var_4</span>):</span>  <span class="hljs-comment"># Add 4-spaces to distinguish level below</span>
  <span class="hljs-string">"""One-line Docstrings. What this f-tion does"""</span>
  <span class="hljs-keyword">return</span> var_1

<span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> string:
    print(i)  <span class="hljs-comment"># 4-space identation.</span>

foo = lg_fnc_n(var_1, var_2,     <span class="hljs-comment"># Aligned with opening</span>
                var_3, var_4)  <span class="hljs-comment"># for vertical alignment.</span>
<span class="hljs-comment"># ---------------------------------</span>
<span class="hljs-comment"># ---------------------------------</span></code>`,
  },
  {
    id: 13,
    tags: "pep-0008",
    code_block: `<code class="python hljs">i = i + <span class="hljs-number">1</span>
submitted += <span class="hljs-number">1</span>  <span class="hljs-comment"># No space between operator</span>
x = x*<span class="hljs-number">2</span> - <span class="hljs-number">1</span>  <span class="hljs-comment"># No space around multiply/divide</span>
hypot2 = x*x + y*y
c = (a+b) * (a-b)
result = some_function(
    <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>,
    <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>
)  <span class="hljs-comment"># Lined up with the first character</span>
<span class="hljs-comment"># Backslashes with long, multiple with-statements.</span>
<span class="hljs-keyword">with</span> <span class="hljs-built_in">open</span>(<span class="hljs-string">'/f/read'</span>) <span class="hljs-keyword">as</span> file_1, \
    <span class="hljs-built_in">open</span>(<span class="hljs-string">'f/write'</span>, <span class="hljs-string">'w'</span>) <span class="hljs-keyword">as</span> file_2:
    file_2.write(file_1.read())
<span class="hljs-comment"># Easy to match operators with operands</span>
result = (salary
          + bonus_sales,
          + bonus_staff,
          + (dividends - qualified_dividends),
          - ira
          - loan_interest)
<span class="hljs-comment"># ---------------------------------</span></code>`,
  },
];

// Select elements
const wrapper = document.querySelector(".wrapper");
const btnContainer = document.querySelector(".btn-container");

// When window loads display items from array
window.addEventListener("DOMContentLoaded", () => {
  displayCodeBlock(codeBlocks);
  const tags = codeBlocks.reduce(
    (values, item) => {
      if (!values.includes(item.tags)) {
        values.push(item.tags);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = tags
    .map((tag) => {
      return `<button class="filter-btn" type="button" data-id="${tag}">${tag}</button>`;
    })
    .join("");
  btnContainer.innerHTML = categoryBtns;

  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      // console.log(category);
      const tagCategory = codeBlocks.filter((tagItem) => {
        // console.log(tagItem.tags);
        if (tagItem.tags === category) {
          return tagItem;
        }
      });
      if (category === "all") {
        displayCodeBlock(codeBlocks);
      } else {
        displayCodeBlock(tagCategory);
      }
    });
  });
});

// Loops through each codeBlocks and returns html
let displayCodeBlock = (codeBlocks) => {
  let displayCode = codeBlocks.map((item) => {
    return `
    <div class="code-block"><h1 class="code-block-tag">${item.tags}</h1><pre><code class="python">${item.code_block}</code></pre></div>`;
  });
  displayCode = displayCode.join("");
  wrapper.innerHTML = displayCode;
};
