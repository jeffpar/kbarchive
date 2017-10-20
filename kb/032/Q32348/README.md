---
layout: page
title: "Q32348: Incorrect Comment Pragma Example"
permalink: /kb/032/Q32348/
---

## Q32348: Incorrect Comment Pragma Example

{% raw %}

	Article: Q32348
	Product(s): See article
	Version(s): 5.10   | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | docerr | mspl13_c
	Last Modified: 15-JAN-1990
	
	Page 12 (Update-12) of the Update section for the "Microsoft C
	Optimizing Compiler User's Guide and Language Reference" manual shows
	an incorrect example of the comment pragma.
	
	The second parameter of the pragma is a string literal and should be
	enclosed in double quotation marks. The example should look like the
	following:
	
	   #pragma comment(lib, "mylibry")
	
	Note: If the quotation marks are missing, the compiler will issue
	error C4079.

{% endraw %}
