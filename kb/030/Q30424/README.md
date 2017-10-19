---
layout: page
title: "Q30424: Using the &amp; Operator to Combine Multiple Parameters"
permalink: /kb/030/Q30424/
---

## Q30424: Using the &amp; Operator to Combine Multiple Parameters

	Article: Q30424
	Product(s): Microsoft Macro Assembler
	Version(s): 6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Attempting to use the & substitute operator to combine parameters requires
	that each parameter being substituted have one ampersand on the left and right.
	If an ampersand is adjacent to white space, it can be omitted as long as one
	ampersand is next to each parameter to be substituted.
	
	MORE INFORMATION
	================
	
	If multiple parameters are being combined with the & operator, each
	parameter must have it's own & symbol associated with it. Also each &
	symbol can only be associated with one parameter. The sample code provided below
	helps to illustrate the use of the & substitute operator to combine multiple
	parameters.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	  .MODEL small, c
	  .STACK
	
	  level1 macro
	          forc x,f
	              level2 x
	          endm
	      endm
	
	  level2 macro x
	          forc y,e
	              level3 x&y
	          endm
	      endm
	
	  level3 macro i
	  level3&i:
	      push bp
	      mov  bp, 0&i&h
	      jmp  FINISH
	      endm
	
	  .CODE
	
	  START:
	      level1
	  FINISH:
	      mov   ax, 4C00h
	      int   21h
	  end START
	
	Attempting to assemble the sample code given above will cause MASM 6.0 to
	generate the following error messages:
	
	  
	
	   file.asm(27): error A2048: nondigit in number
	    level3(3): Macro Called From
	     MacroLoop(1): iteration 1: Macro Called From
	      level2(3): Macro Called From
	       MacroLoop(1): iteration 1: Macro Called From
	        level1(3): Macro Called From
	         file.asm(27): Main Line Code
	
	MASM generates the following code for the macros in the sample code:
	
	      level1
	          forc x,f
	          level2 x
	      endm
	      level2 f
	          forc y,e
	          level3 fy
	      endm
	      level3 fy
	          level3fy:
	          push bp
	          mov bp,0fyh
	
	The A2048 error is generated because the substitution of the 'y' parameter being
	performed in the call to the level3 macro from inside the level2 macro is not
	occurring. The A2048 error is generated when the level3 macro attempts to store
	the invalid value it was passed from the level2 macro in the BP register.
	
	The substitution of the 'y' parameter is not occurring because the syntax being
	used with the & operator is incorrect. The level2 macro is defined as
	follows:
	
	  level2 macro x
	          forc y,e
	              level3 x&y
	          endm
	      endm
	
	To allow the correct substitution to take place, add another & to the level3
	macro call, like this:
	
	  level2 macro x
	          forc y,e
	              level3 x&&y
	          endm
	      endm
	
	After making the change shown above, MASM 6.0 then generates the following code
	for the macros:
	
	      level1
	          forc x,f
	          level2 x
	      endm
	      level2 f
	          forc y,e
	          level3 f&y
	      endm
	      level3 fe
	          level3fe:
	          push bp
	          mov bp,0feh
	          jmp FINISH
	
	The value being placed into the BP register is now valid and the code functions
	as expected.
	
	Additional query words: kbinf 5.10 5.10a 6.00 6.00a 6.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM600a kbMASM600b
	Version           : :6.0,6.0a,6.0b
	
	=============================================================================
	
