---
layout: page
title: "Q50704: Compiling isatty() Sample Program Gives C2146: Syntax Error"
permalink: /kb/050/Q50704/
---

## Q50704: Compiling isatty() Sample Program Gives C2146: Syntax Error

{% raw %}

	Article: Q50704
	Product(s): See article
	Version(s): 5.00 5.10 | 5.00 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | DOCERR | mspl13_c
	Last Modified: 30-NOV-1989
	
	On Page 376 of the "Microsoft C Run-Time Library Reference" for C
	Versions 5.00 and 5.10, the sample program for the function isatty()
	will generate a syntax error when compiled. The zero in the printf()
	statement should be changed to a double quotation mark (i.e., %s0
	should be %s"). The following is the printf() statement with the
	correct syntax:
	
	   printf ("Is stdout redirected? %s", interactive ? "no" : "yes");

{% endraw %}
