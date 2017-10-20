---
layout: page
title: "Q60487: Prototype in User's Guide for tglcase() Is Incorrect"
permalink: /kb/060/Q60487/
---

## Q60487: Prototype in User's Guide for tglcase() Is Incorrect

{% raw %}

	Article: Q60487
	Product(s): See article
	Version(s): 1.02    | 1.02
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | docerr | mspl13_basic
	Last Modified: 15-APR-1990
	
	In the sample program for a C extension on Page 126 of the "Microsoft
	Editor User's Guide" for Microsoft FORTRAN 5.00 and Microsoft BASIC
	PDS Version 7.00, the prototype for tglcase() is incorrect.
	
	The function is prototyped as follows:
	
	   flagType pascal EXPORT tglcase (unsigned int, ARG far *, flagType);
	
	It should be as follows:
	
	   flagType pascal EXTERNAL tglcase (unsigned int, ARG far *, flagType);
	
	Note: The word EXTERNAL replaces EXPORT.

{% endraw %}
