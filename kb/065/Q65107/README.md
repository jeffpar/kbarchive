---
layout: page
title: "Q65107: Modulus Yields Incorrect Result When Used with /Ot"
permalink: /kb/065/Q65107/
---

## Q65107: Modulus Yields Incorrect Result When Used with /Ot

	Article: Q65107
	Product(s): See article
	Version(s): 2.00 2.01
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | buglist2.00 buglist2.01 fixlist2.50 fixlist2.51 | mspl13_c
	Last Modified: 31-AUG-1990
	
	The following code using the modulus operator "%" yields incorrect
	results under Microsoft QuickC version 2.00 when optimizations are set
	to ON or FULL and release mode is selected.
	
	The error also occurs when compiling using the qcl command if you use
	the /O, /Ot, or /Ox optimizations.
	
	To avoid the error, upgrade to QuickC version 2.50 or QuickC with
	QuickAssembler version 2.51, or avoid the problem optimizations.
	Neither version 5.10 or version 6.00 of the Microsoft C Compiler
	demonstrate this error.
	
	Sample Code
	-----------
	
	#include <stdio.h>
	
	main ()
	{
	 int x=26,
	     Number = 151-(3 * x),
	     Onesdigit = Number % 10;
	
	 printf("The one's digit is: %i\n",Onesdigit); // correct output is 3,
	                                               // buggy output is 0
	}
	
	Microsoft has confirmed this to be a problem with QuickC versions 2.00
	and 2.01. This problem is corrected in versions 2.50 and 2.51.
