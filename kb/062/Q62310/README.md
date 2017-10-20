---
layout: page
title: "Q62310: Internal Compiler Error '@(#)newcode.c:1.87', Line 604"
permalink: /kb/062/Q62310/
---

## Q62310: Internal Compiler Error '@(#)newcode.c:1.87', Line 604

{% raw %}

	Article: Q62310
	Product(s): See article
	Version(s): 6.00   | 6.00
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | buglist6.00 | mspl13_c
	Last Modified: 22-JUN-1990
	
	The code below, when compiled by Microsoft C 6.00 with default
	optimizations for the compact or large memory models, produces the
	following error message:
	
	   fatal error C1001: Internal Compiler Error
	               (compiler file '@(#)newcode.c:1.87', line 604)
	               Contact Microsoft Product Support Services
	
	Sample Code
	-----------
	
	typedef unsigned long   ULONG;
	
	typedef struct
	{
	    ULONG   a;
	}   A;
	
	typedef struct
	{
	    A       b;
	}   B;
	
	B   far *c;
	
	void test( void )
	{
	    //  Making two separate assignments is OK
	    //
	    ULONG   ok_1 = (c->b.a);
	    ULONG   ok_2 = (ULONG)c + ok_1;
	
	    // But performing the same computation in one
	    // assignment causes an internal compiler error.
	    //
	    ULONG   bomb = (ULONG)c + (c->b.a);
	}
	
	The error may be worked around by splitting the assignment into two
	separate operations, as seen in the sample code.
	
	Microsoft has confirmed this to be a problem in C version 6.00. We are
	researching this problem and will post new information here as it
	becomes available.

{% endraw %}
