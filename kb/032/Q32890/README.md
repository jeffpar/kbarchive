---
layout: page
title: "Q32890: extern int i = 10; Compiles without Error"
permalink: /kb/032/Q32890/
---

## Q32890: extern int i = 10; Compiles without Error

	Article: Q32890
	Product(s): See article
	Version(s): 5.10   | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | docerr | mspl13_c
	Last Modified: 19-JUL-1988
	
	Page 89 of "Microsoft C Optimizing Compiler Language Reference"
	states the following:
	
	  "Declarations that use the extern storage-class specifier cannot
	include initializers."
	
	  However, the following example compiles without error:
	
	  extern int i = 10;
	
	  The documentation is incorrect. The ANSI standard makes no
	distinction between the following declarations when they have file
	scope (i.e., they are declared globally):
	
	  int i = 10;
	  extern int i = 10;
	
	  Therefore, the compiler does not generate a warning or error for
	either of these cases.
