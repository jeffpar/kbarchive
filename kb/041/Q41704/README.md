---
layout: page
title: "Q41704: QuickC 2.00, Watch Statement on Implicit Length Arrays"
permalink: /kb/041/Q41704/
---

## Q41704: QuickC 2.00, Watch Statement on Implicit Length Arrays

{% raw %}

	Article: Q41704
	Product(s): See article
	Version(s): 2.00
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | buglist2.00 | mspl13_c
	Last Modified: 28-FEB-1989
	
	When the array is initialized and declared in C at the same time, the
	length does not need to be specified as the compiler counts the
	elements in the array and allocates enough memory to store the array.
	
	The following is an example of an array with implicit length:
	
	   int x[] = {1,2,3,4,5};
	
	The compiler would allocate the space for a five-integer array. When
	the length of an array is stated implicitly, the QuickC Version 2.00
	debugger is not able to set a watch-value debug statement on the array
	correctly. A watch value debug statement on "x" would result in the
	following
	
	   x  { },
	
	not the following, as expected:
	
	   x {1,2,3,4,5}
	
	Microsoft has confirmed this to be a problem in Version 2.00. We are
	researching this problem and will post new information as it becomes
	available.
	
	To work around this problem, state the length explicitly in the array
	declaration.
	
	The following is an example:
	
	   int y[5] ={1,2,3,4,5};
	
	A watch value debug statement on "y" would now result in the
	following, as expected:
	
	   y {1,2,3,4,5}

{% endraw %}
