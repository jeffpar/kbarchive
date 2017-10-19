---
layout: page
title: "Q48771: LIB.LIB: Cannot Find Library"
permalink: /kb/048/Q48771/
---

## Q48771: LIB.LIB: Cannot Find Library

	Article: Q48771
	Product(s): See article
	Version(s): 2.00 2.01
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | S_QuickASM | mspl13_c
	Last Modified: 10-OCT-1989
	
	The following error occurs when you try to compile and link
	a program in the QC environment, and don't use or have LIB.LIB:
	
	   LIB.LIB: cannot find library
	
	This error occurs when a trailing space is included at the end of the
	library files directory in Options.Environment. Remove the trailing
	space or retype the directory and path without the trailing space.
