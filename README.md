#Binary Search

##What's different?
Unlike linear search, which looks through each element of a list in turn, checking each along the way to see if it's what we're looking for, Binary Search uses comparisons to determine where it should go next intelligently, continually reducing the number of possible options until only one is left.

##What's the Big O?
Because it eliminates half the remaining possibilities every time it checks an element in the list, it has a worst-case Big O notation of O(log(n)) -- very impressive! That means that--in a worst case scenario--the maximum number of elements we'll have to look through in order to find what we're looking for can be determined by taking the logarithm of the number of elements in the list. Basically, WAY fewer than the actual number of elements present in the list (in most cases). We get to NOT look at a lot more than we DO look at! That's awesome!

##Comparison
By comparison, searching each element individually has a worst-case Big O notation of O(n) -- if everything goes poorly, we'll only find what we're looking for after searching through EVERY OTHER element. That's about what one would normally expect of searching, and not horrible--except in comparison to Binary Search.

##What's the catch?
Of course, the REASON that Binary Search is so efficient is that it's able to know more about the list than just the value of the element it's currently looking at. In order to do a valid comparison, it has to know how the list as a whole works, so that it knows where to go next depending on how the comparison works out. That is, Binary Search is IMPOSSIBLE on any list that does not have a set, well-defined, value-based order to it.

The simplest example for this sort of thing is mathematical comparison (as we have in this example), but technically you can do a Binary Search on any list of elements that have a strict and sensical order to them--any value-based order which will allow you to construct a comparison (however complicated) between the element you're looking at, the elements that come after it, and the elements that come before it.
