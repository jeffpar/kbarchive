---
layout: page
title: "Q74882: MASM MUL Operation Accepts Only One Operand"
permalink: kb/074/Q74882/
---

## Q74882: MASM MUL Operation Accepts Only One Operand

	Article: Q74882
	Product(s): Microsoft Macro Assembler
	Version(s): MS-DOS:5.01a,5.1,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.1, 5.01a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The assembly language multiplication instruction MUL accepts only one operand.
	The second operand is implied to be either the AX or the AL register depending
	on whether an 8-bit multiplication or 16-bit multiplication is being performed.
	
	If a second operand is specified, the Microsoft Macro Assembler (MASM) version
	6.0 will generate the following error:
	
	  error A2008: syntax error : ,
	
	MASM versions 5.1 and 5.1a generate the following warning:
	
	  warning A4001: Extra characters on line
	
	MORE INFORMATION
	================
	
	The sample code below can be used to illustrate this situation. Assembling the
	code with MASM version 5.1, 5.1a, or 6.0 will result in one of the above
	errors.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	      .MODEL small
	      .CODE
	      mul ah, 10
	      END
	
	Additional query words: kbinf 5.10 5.10a 6.00 6.00a 6.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM600
	Version           : MS-DOS:5.01a,5.1,6.0
	
	=============================================================================
	
