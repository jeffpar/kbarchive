---
layout: page
title: "Q41613: Error L2003 When Linking with Wrong Libraries"
permalink: /kb/041/Q41613/
---

## Q41613: Error L2003 When Linking with Wrong Libraries

	Article: Q41613
	Product(s): See article
	Version(s): 2.00
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | | mspl13_c
	Last Modified: 28-FEB-1989
	
	When compiling and linking inside of the QuickC Version 2.00
	integrated environment, the following error can occur if the memory
	model is set to "Large" (under "Options"-->"Make"-->"Compiler Flags"),
	and the make file links in "SLIBCE.LIB" or "MLIBCE.LIB". The error
	message is as follows:
	
	   LIB\SLIBCE.LIB(dos\crt0.asm) : error L2003: intersegment
	   self-relative fixup at pos: 3D6 Record type: 9C.
	   target external '_main'
	
	To correct this behavior, do the following:
	
	1. Change either the make file or the memory-model choice so they are
	   consistent.
	
	2. Recompile the program.
