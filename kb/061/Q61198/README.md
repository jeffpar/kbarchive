---
layout: page
title: "Q61198: C 6.00 README: setjmp/longjmp with /Ox, /Oe, /Ol, or /Og"
permalink: /kb/061/Q61198/
---

## Q61198: C 6.00 README: setjmp/longjmp with /Ox, /Oe, /Ol, or /Og

	Article: Q61198
	Product(s): See article
	Version(s): 6.00   | 6.00
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | | mspl13_c
	Last Modified: 15-AUG-1990
	
	The following information is taken from the C Version 6.00 README.DOC file.
	
	Don't Use setjmp/longjmp with /Ox, /Oe, /Ol, or /Og
	---------------------------------------------------
	
	Using the setjmp and longjmp functions with global optimization
	options /Ox, /Oe, /Ol, or /Og can cause incorrect code to be
	generated. To ensure that the compiler generates correct code, either
	compile without these options, or use the optimize pragma to turn off
	/Oe, /Ol, and /Og in functions containing setjmp and longjmp, as
	follows:
	
	   #pragma optimize( "elg",off )
	
	        . . . {function containing setjmp or longjmp}
	
	   #pragma optimize( "",on )
