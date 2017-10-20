---
layout: page
title: "Q99487: Argument Orders for CDECL and PASCAL Functions in MASM"
permalink: /kb/099/Q99487/
---

## Q99487: Argument Orders for CDECL and PASCAL Functions in MASM

{% raw %}

	Article: Q99487
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	SUMMARY
	=======
	
	Making Macro Assembler (MASM) calls to C functions is straightforward if you
	keep in mind the order of the arguments. How the arguments are pushed for the
	two most commonly used types of functions, CDECL and PASCAL, is described
	below.
	
	The LAN Manager APIs all use FAR PASCAL calling conventions.
	
	ARGUMENTS FOR CDECL
	-------------------
	
	  int x,y;               /* C Lang call */ 
	  int min(x,y);
	
	  push   y             /* MASM call */ 
	  push   x             /* Note: arguments are pushed from right
	
	                       /* to left */ 
	
	  call   _min          /* On return from the function, you must
	
	                       /* reset your */ 
	
	  add    sp,4          /* stack. That is: add sp,(total size of
	
	                       /* arguments passed) */ 
	
	ARGUMENTS FOR PASCAL
	--------------------
	
	(Use for all LAN Manager APIs)
	
	  int x,y;
	  int PASCAL max(x,y);   /* C Lang call */ 
	
	  push  x                /* MASM call */ 
	  push  y                /* Note: arguments are pushed from left
	
	                         /* to right */ 
	
	  call  _max             /* On return from PASCAL function, no
	
	                         /* additional work is required. The
	                         /* function itself does a RET X, where x
	                         /* is the size of the arguments passed.*/ 
	
	You also must use the H2INC utility to convert any header files that contain data
	definitions. The H2INC documentation ("Programmer's Guide," Chapter 14)
	discusses ways to convert function definitions so that MASM can understand them.
	You can also convert a C file to MASM in order to check its syntax with the
	following command:
	
	  cl -c -Fa -Fs file.c
	
	REFERENCES
	==========
	
	"Microsoft LAN Manager Programmer's Guide," version 2, Chapter 14, Debugging
	Distributed Applications
	
	Additional query words: 2.00 2.0 2.10 2.1 2.10a 2.1a 2.20 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
