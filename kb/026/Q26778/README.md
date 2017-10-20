---
layout: page
title: "Q26778: _amblksiz Not Declared"
permalink: /kb/026/Q26778/
---

## Q26778: _amblksiz Not Declared

{% raw %}

	Article: Q26778
	Product(s): See article
	Version(s): 4.00 5.00 5.10
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | docerr | mspl13_c
	Last Modified: 26-SEP-1988
	
	Page 33 of the "Microsoft C Compiler Run-Time Library Reference
	Manual" (Page 31 for Version 4.00) incorrectly states that _amblksiz
	"is declared in the include file malloc.h". It is not there.
	
	You can use the variable in your program by declaring the variable as
	follows:
	
	extern unsigned int _amblksiz;

{% endraw %}
