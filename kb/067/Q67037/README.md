---
layout: page
title: "Q67037: Embedded Unnamed Structures and Unions Cannot Be Initialized"
permalink: /kb/067/Q67037/
---

## Q67037: Embedded Unnamed Structures and Unions Cannot Be Initialized

{% raw %}

	Article: Q67037
	Product(s): See article
	Version(s): 6.00 6.00a | 6.00 6.00a
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | buglist6.00 buglist6.00a | mspl13_c
	Last Modified: 20-NOV-1990
	
	The ability to utilize "nameless" structures and unions provides a
	convenient shorthand for referring to structures embedded in other
	structures, but the current design of the compiler does not allow
	these unnamed members to be initialized.
	
	Permitting initialization involves a number of ambiguities that the
	compiler does not currently track. If you attempt to initialize a
	nameless structure or union, the compiler will generate a "C2097 :
	illegal initialization" error. The sample code below demonstrates this
	limitation.
	
	Microsoft has confirmed this to be a problem in C versions 6.00 and
	6.00a and QuickC versions 2.50 and 2.51. We are researching this
	problem and will post new information here as it becomes available.
	
	Sample Code
	-----------
	
	typedef struct _reg {
	    union {
	        long   eax;
	        short  ax;
	        };
	    union {
	        long   ebx;
	        short  bx;
	        };
	    } regtype;
	
	regtype  foo = { {1l}, {2l} };    /* This initialization attempt
	                                     generates a C2097 error     */
	
	void main(void)
	{
	}

{% endraw %}
