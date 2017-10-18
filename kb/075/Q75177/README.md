---
layout: page
title: "Q75177: FIX: Subtracting Two Externs Gives Incorrect Results"
permalink: kb/075/Q75177/
---

## Q75177: FIX: Subtracting Two Externs Gives Incorrect Results

	Article: Q75177
	Product(s): Microsoft Macro Assembler
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Subtracting two external variables in the Microsoft Macro Assembler (MASM)
	version 6.0 results in an incorrect value, and the assembler does not generate
	any errors. It should produce an error similar to the one received in MASM 5.1,
	such as:
	
	  A2032: Illegal Use of extern
	
	CAUSE
	=====
	
	When subtracting two local variables, the assembler will correctly calculate the
	difference in their offsets. However, with external variables, it does not know
	the offset at assemble time, so it cannot correctly determine their difference.
	
	RESOLUTION
	==========
	
	The difference in offsets for external variables can be calculated by moving the
	values into registers or temporary variables and then performing the
	calculation. The sample code below illustrates this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM version 6.0. This problem
	was corrected in MASM version 6.0a.
	
	MORE INFORMATION
	================
	
	Sample Code 1
	-------------
	
	  ; Assemble options needed: none
	
	  .MODEL small
	  .STACK 4096
	
	  .DATA
	  extrn Var1 : byte, Var2 : byte ; The extern variables
	
	  .CODE
	      .startup
	      mov ax, offset Var1   ; Gives correct offset of extern var1
	      mov bx, offset Var2   ; Gives correct offset of extern var2
	      mov cx, (Var2 - Var1) ; Incorrectly calculate a zero for
	                            ; the difference
	      sub bx, ax            ; This will calculate the correct value
	      .exit 0
	  END
	
	Sample Code 2
	-------------
	
	  ; Contains the external variable definitions
	
	  PUBLIC   Var1, Var2
	  .MODEL small
	  .DATA
	  Var1     byte   '5'
	  Var2     byte   '9'
	  END
	
	Additional query words: 6.00 buglist6.00 fixlist6.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600
	Version           : MS-DOS:6.0
	Solution Type     : kbfix
	
	=============================================================================
	
