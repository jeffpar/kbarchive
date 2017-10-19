---
layout: page
title: "Q43396: C: _bios_timeofday Documentation Error"
permalink: /kb/043/Q43396/
---

## Q43396: C: _bios_timeofday Documentation Error

	Article: Q43396
	Product(s): See article
	Version(s): 5.00 5.10 | 5.00 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | docerr | mspl13_c
	Last Modified: 14-APR-1989
	
	On Page 146 of the "Microsoft C 5.1 Optimizing Compiler Run-Time
	Library Reference" manual and the "Microsoft QuickC Run-Time Library
	Reference" manual, the second parameter of _bios_timeofday is
	incorrectly stated as a long integer, as follows:
	
	   long timeval;
	
	The corrected declaration is a pointer to a long integer, as follows:
	
	   long *timeval;
