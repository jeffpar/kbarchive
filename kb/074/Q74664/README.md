---
layout: page
title: "Q74664: FIX: MASM 5.1/5.1a Will Not Allow .STACK to Exceed 32K"
permalink: kb/074/Q74664/
---

## Q74664: FIX: MASM 5.1/5.1a Will Not Allow .STACK to Exceed 32K

	Article: Q74664
	Product(s): Microsoft Macro Assembler
	Version(s): MS-DOS:5.1,5.10a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.1, 5.10a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Microsoft Macro Assembler (MASM) versions 5.1 and 5.1a, the following
	error message may be generated if a stack segment is declared larger than 32K:
	
	  error A2102: Segment near (or at) 64K limit
	
	This error will only occur if you are using the .STACK directive to generate the
	stack segment.
	
	RESOLUTION
	==========
	
	You can work around this by either of the following:
	
	1. Use a full segment declaration to declare the stack.
	
	-or-
	
	2. Use multiple .STACK directives to declare the total stack space required by
	  your program.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM versions 5.1 and 5.1a. This
	problem was corrected in MASM version 6.0.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	  .MODEL small       ; Use any memory model
	
	  .STACK 8000h       ; Open and allocate STACK segment
	                     ; STACK segment automatically closed
	  END
	
	Additional query words: 5.10 5.10a 6.00 buglist5.10 buglist5.10a fixlist6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM600
	Version           : MS-DOS:5.1,5.10a,6.0
	Solution Type     : kbfix
	
	=============================================================================
	
