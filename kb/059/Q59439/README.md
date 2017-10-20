---
layout: page
title: "Q59439: C4071 Can Be Caused by Missing &quot;void&quot; in Function Prototype"
permalink: /kb/059/Q59439/
---

## Q59439: C4071 Can Be Caused by Missing &quot;void&quot; in Function Prototype

{% raw %}

	Article: Q59439
	Product(s): See article
	Version(s): 5.00 5.10 6.00 | 5.00 5.10 6.00
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | s_quickc | mspl13_c
	Last Modified: 18-APR-1990
	
	Function prototypes must have parameter lists. If no arguments are to
	be passed to a function, the parameter list must contain the keyword
	"void". At warning level three (/W3), leaving the "void" out of such a
	prototype parameter list leads to the following warning message in C
	Versions 5.00 and 6.00 and QuickC Versions 2.00, 2.01, 2.50, and 2.51:
	
	   C4071 'name' : no function prototype given
	
	In C Version 5.10, the following additional warning message occurs:
	
	   C4103 Function definition used as prototype
	
	The following code demonstrates the problem:
	
	/* myfunc is not prototyped correctly */
	
	#include <stdio.h>
	void myfunc();          /* missing void in parameter list */
	void main(void)
	{
	  myfunc();             /* myfunc still not prototyped */
	}
	
	void myfunc()    /* function definition doesn't need void */
	{
	  printf("Hello\n");
	}

{% endraw %}
