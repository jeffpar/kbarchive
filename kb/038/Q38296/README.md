---
layout: page
title: "Q38296: How the Null Character Is Handled by Printf Functions."
permalink: /kb/038/Q38296/
---

## Q38296: How the Null Character Is Handled by Printf Functions.

	Article: Q38296
	Product(s): See article
	Version(s): 4.00 5.00 5.10 | 4.00 5.00 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | S_QuickC | mspl13_c
	Last Modified: 28-NOV-1988
	
	When the C run-time functions printf, fprintf, or sprintf encounter
	the character-conversion specifier %c in their format-control string,
	they will convert the corresponding argument of int type to unsigned
	char type and write the resulting value to output. Therefore, if the
	argument is a NULL character, the value 0 (not the character "0") is
	written to the output.
	
	The output can be stdout, a file (with fprintf) or a string (with
	sprintf). In case of stdout, the NULL character is ignored by the
	display device. In the case of string, the NULL character will be
	interpreted as a terminator character when the resulting string is
	used later in the program.
	
	The output of the following program is the result of expected
	behavior:
	
	#include <stdio.h>
	char buffer[30] ;
	main()
	{
	printf("Before,%c,After\n", '\0') ;
	sprintf(buffer, "Before,%c,After\n", '\0') ;
	printf(buffer) ;
	}
	/* end of sample program */
	
	Output :
	
	Before,,After
	Before,
