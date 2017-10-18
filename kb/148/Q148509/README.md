---
layout: page
title: "Q148509: PRB: A2108 Error When Using Simplified Segment Directives"
permalink: kb/148/Q148509/
---

## Q148509: PRB: A2108 Error When Using Simplified Segment Directives

	Article: Q148509
	Product(s): Microsoft Macro Assembler
	Version(s): 6.0,6.1,6.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.0, 6.1, 6.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When assembling code that uses simplified segment directives, the Macro
	Assembler displays an error message similar to this one:
	
	  error A2108: use of register assumed to ERROR
	
	CAUSE
	=====
	
	This error can occur because of incorrect order of the .DATA and .CODE
	directives in the assembly source code. The .DATA directive implies ASSUME
	CS:ERROR. Any code that appears after the .DATA directive and attempts to
	implicitly or explicitly use the CS register (such as JMP instructions or
	labels) will generate this error.
	
	RESOLUTION
	==========
	
	Make sure that a .CODE directive and not a .DATA directive precedes your
	procedure definitions and any other instructions.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Sample Code to Reproduce Error
	------------------------------
	
	  ; Assemble options needed: none
	
	  .MODEL small, c
	
	  .CODE
	
	  .DATA
	
	  my_label:
	
	  END
	
	Additional query words: 6.00 6.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM610 kbMASM611
	Version           : :6.0,6.1,6.11
	
	=============================================================================
	
