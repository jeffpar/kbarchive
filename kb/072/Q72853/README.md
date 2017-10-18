---
layout: page
title: "Q72853: BUG: H2INC Produces Garbage/GP Faults w/ Some Function Typedefs"
permalink: kb/072/Q72853/
---

## Q72853: BUG: H2INC Produces Garbage/GP Faults w/ Some Function Typedefs

	Article: Q72853
	Product(s): Microsoft C Compiler
	Version(s): OS/2:1.0; winnt:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under certain circumstances, the Microsoft C to MASM Include File Translator
	(H2INC) version 1.0 that ships with the Microsoft Macro Assembler (MASM) version
	6.0 may generate invalid results for certain C include files with function
	typedefs. Under MS-DOS, the result may be garbage characters in the generated
	.INC file. Under OS/2, H2INC may cause a general protection violation (GP
	Fault).
	
	The problem occurs in this file only when all the following conditions are true:
	
	- Two consecutive typedefs in the file are used to define functions.
	
	- The total argument count for the two typedefs is 10 or more.
	
	- The last argument to the first function typedef is a far pointer.
	
	RESOLUTION
	==========
	
	To work around this behavior, define a dummy typedef between the two typedefs
	that will keep the argument count below 10.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in H2INC version 1.0 which is
	included with MASM version 6.0. This problem was corrected in H2INC version 1.0
	which is included with MASM version 6.0a.
	
	MORE INFORMATION
	================
	
	The sample header file below may be used to illustrate this problem. Garbage
	characters will appear in the resulting .INC file.
	
	Sample Code
	-----------
	
	  /* Command line options needed: none
	  */ 
	  typedef void Func1Def(int, int, int, int, void _far *);
	  // typedef void DummyFunc(int, int, int);  // Uncomment for workaround
	  typedef void Func2Def(int, int, int, int, int);
	
	  struct FuncStruct
	  {
	     int arg1;
	     Func1Def * Func1;
	     Func2Def * Func2;
	  } FuncStruct;
	
	Additional query words: 6.00 1.00 buglist1.00 s_utility h_h2inc fixlist1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM100
	Version           : OS/2:1.0; winnt:1.0
	
	=============================================================================
	
