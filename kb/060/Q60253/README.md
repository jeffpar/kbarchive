---
layout: page
title: "Q60253: C4061 Long/Short Mismatch in Argument"
permalink: /kb/060/Q60253/
---

## Q60253: C4061 Long/Short Mismatch in Argument

{% raw %}

	Article: Q60253
	Product(s): See article
	Version(s): 5.00 5.01 6.00 | 5.00 5.01 6.00
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | s_quickc | mspl13_c
	Last Modified: 18-APR-1990
	
	In Microsoft C Versions earlier than Version 6.00, the C4061 warning
	was generated only if the actual and formal arguments to a function
	were a mix of long and int types. Beginning with Microsoft C Version
	6.00, this warning message will be generated if the types are a mix of
	int and char. This is not a fatal error and is generated only to alert
	the programmer that there MAY be a problem.
	
	The error message is generated for the following sample code at
	warning level 1. If the /Qc option is used (Quick Compile), the
	warning is not generated at any warning level. Also, in QuickC
	Versions 2.00, 2.01, 2.50, and 2.51, a warning is never generated for
	this code.
	
	Sample Code
	-----------
	
	#include <stdio.h>
	
	void foo (char); /* At prototype level argument type is CHAR */
	void main(void);
	
	void main (void)
	{
	   foo (200);   /*  Now passing an INTEGER to a CHAR  */
	}
	
	void foo (char c) /* Argument correctly declared as CHAR */
	{}

{% endraw %}
