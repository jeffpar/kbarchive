---
layout: page
title: "Q61675: SSEGADD Example Requires Large Model (/AL) for C Routine"
permalink: /kb/061/Q61675/
---

## Q61675: SSEGADD Example Requires Large Model (/AL) for C Routine

{% raw %}

	Article: Q61675
	Product(s): See article
	Version(s): 7.00   | 7.00
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | SR# S900501-79 docerr S_C S_QuickC | mspl13_basic
	Last Modified: 11-MAY-1990
	
	The SSEGADD example on Page 351 of the "Microsoft BASIC 7.0: Language
	Reference" manual requires that the C routine (printmessage) be
	compiled with the large memory model (/AL). The following compile
	lines should be added for the C routine:
	
	   For C 5.00 and 5.10
	   -------------------
	
	     CL -AL printmsg.c ;
	
	   For QuickC 1.00, 1.01, 2.00, and 2.01
	   -------------------------------------
	
	     QCL -AL printmsg.c ;
	
	This information applies to Microsoft BASIC Professional Development
	System (PDS) version 7.00.
	
	In general, routines written in C (or other languages) need to be
	compiled either for the medium memory (/AM) or the large memory (/AL)
	model. The model size affects the default pointer type (near or far).
	
	When the SSEGADD example is compiled for medium model, the program
	runs without error, but the wrong data is displayed. This is because
	the printf() function is expecting a near pointer (offset in the data
	segment) and printmessage is accepting a far pointer (segment and
	offset). If you use the large memory model, printf() expects a far
	pointer, and the program runs correctly.

{% endraw %}
