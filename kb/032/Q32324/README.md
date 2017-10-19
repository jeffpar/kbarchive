---
layout: page
title: "Q32324: C 5.00 and 5.10 putenv() Example Program Missing Backslashes"
permalink: /kb/032/Q32324/
---

## Q32324: C 5.00 and 5.10 putenv() Example Program Missing Backslashes

	Article: Q32324
	Product(s): See article
	Version(s): 5.00 5.10 | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | docerr | mspl13_c
	Last Modified: 15-JAN-1991
	
	The example program for the putenv() function on page 468 of the
	"Microsoft C 5.10 Optimizing Compiler Run-Time Library Reference" is
	incorrect. The C code requires double backslashes in order to work
	correctly.
	
	This is the incorrect line:
	
	   if (putenv("PATH=a\bin;b:\tmp") == 1)
	
	The corrected line (with escaped backslashes) should read as follows:
	
	   if (putenv("PATH=a:\\bin;b:\\tmp") == 1)
