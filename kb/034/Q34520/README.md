---
layout: page
title: "Q34520: Library Reference Defines Unused result Pointer"
permalink: /kb/034/Q34520/
---

## Q34520: Library Reference Defines Unused result Pointer

{% raw %}

	Article: Q34520
	Product(s): See article
	Version(s): 5.00 5.10 | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | docerr | mspl13_c
	Last Modified: 12-OCT-1988
	
	The program example for qsort on Page 476 in the "Microsoft C
	Optimizing Compiler Run-Time Library Reference" has a documentation
	error. The following first declaration within the main function, is
	unnecessary:
	
	char **result;
	
	The result pointer is never used in the program.

{% endraw %}
