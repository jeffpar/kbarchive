---
layout: page
title: "Q40576: Compiling Windows Programs with QuickC Requires 640K"
permalink: /kb/040/Q40576/
---

## Q40576: Compiling Windows Programs with QuickC Requires 640K

	Article: Q40576
	Product(s): See article
	Version(s): 2.00
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | | mspl13_c
	Last Modified: 24-JAN-1989
	
	The command line compiler for QuickC Version 2.00, QCL, generates code
	for Microsoft Windows. However, the command line options for producing
	this code are not available within the QuickC environment.
	
	Due to the size of WINDOWS.H, the include file necessary for
	Windows programming, 640K is required to compile any source file
	using the file.
	
	On a 512K machine, QCL fails with the following error when you compile
	the WINDOWS.H header file:
	
	   C1002 : Out of heap space
