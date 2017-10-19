---
layout: page
title: "Q40589: The Definition of Reentrancy"
permalink: /kb/040/Q40589/
---

## Q40589: The Definition of Reentrancy

	Article: Q40589
	Product(s): See article
	Version(s): 4.00 5.00 5.10
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | re-entrant reentrant | mspl13_c
	Last Modified: 16-MAY-1989
	
	Question:
	
	What is reentrancy?
	
	Response:
	
	Reentrancy is the ability of code to be executed simultaneously by
	more than one process. It requires that the code not change the state
	of any global object, such as global variables or hardware. Any code
	compiled by the C compiler that uses only automatic variables will be
	reentrant only if the library functions used by the code are also
	reentrant.
	
	Note: Most library routines are not reentrant, nor is DOS or BIOS.
