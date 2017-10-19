---
layout: page
title: "Q51297: C 5.00 and C 5.10 Compiler Exit Codes"
permalink: /kb/051/Q51297/
---

## Q51297: C 5.00 and C 5.10 Compiler Exit Codes

	Article: Q51297
	Product(s): See article
	Version(s): 5.00 5.10 | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | S_EDITOR | mspl13_c
	Last Modified: 30-NOV-1989
	
	The return codes from the compiler are documented in the "Microsoft C
	Optimizing Compiler User's Guide," Appendix A.3. They are as follows:
	
	   Code       Meaning
	   ----       -------
	   0          No fatal error
	   2          Program error (such as compiler error
	   4          System level error (such as out of disk
	                 space or compiler internal error)
	
	The compiler returns the same exit codes when you run it from inside
	the Microsoft Editor Version 1.00.
