---
layout: page
title: "Q29589: Incorrect Interface Statement"
permalink: /kb/029/Q29589/
---

## Q29589: Incorrect Interface Statement

	Article: Q29589
	Product(s): See article
	Version(s): 5.00 5.10 | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | docerr | mspl13_c
	Last Modified: 12-OCT-1988
	
	The last example on Page 48 of the "Microsoft C 5.1 Optimizing
	Compiler Mixed-Language Programming Guide" reads as follows:
	
	INTERFACE TO FUNCTION REAL*8 CFUN [C] (I,J)
	
	This is incorrect. It should read as follows:
	
	INTERFACE TO REAL*8 FUNCTION CFUN [C] (I,J)
