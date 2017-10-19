---
layout: page
title: "Q67034: Compiler Hangs Under DOS with Long Relative Path for #include"
permalink: /kb/067/Q67034/
---

## Q67034: Compiler Hangs Under DOS with Long Relative Path for #include

	Article: Q67034
	Product(s): See article
	Version(s): 6.00 6.00a
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | buglist6.00 buglist6.00a | mspl13_c
	Last Modified: 18-NOV-1990
	
	The DOS versions of the Microsoft C versions 6.00 and 6.00a Compilers
	cannot handle #include directives that specify files with extremely
	long path specifications. For example, if the following sample line is
	included in a C source file, the compiler will hang, requiring a
	reboot of the computer:
	
	#include "..\test\..\test\..\test\..\test\..\test\..\test\..\test\\
	..\test\..\test\..\test\..\test\..\test\..\test\header.h"
	
	A long relative path, but not as long as the one above, may also
	result in the following compiler error:
	
	   fatal error C1063: compiler limit: compiler stack overflow
	
	Microsoft has confirmed this to be a problem in C versions 6.00 and
	6.00a. We are researching this problem and will post new information
	here as it becomes available.
