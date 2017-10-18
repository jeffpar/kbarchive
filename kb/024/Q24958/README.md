---
layout: page
title: "Q24958: Hexadecimal Numbers Must Begin With a Digit Between 0 and 9"
permalink: kb/024/Q24958/
---

## Q24958: Hexadecimal Numbers Must Begin With a Digit Between 0 and 9

	Article: Q24958
	Product(s): Microsoft Macro Assembler
	Version(s): 5.0,5.1,6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.0, 5.1, 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	With the Microsoft Macro Assembler, a hexadecimal number must begin with a digit
	between zero and nine. This is so that the assembler can distinguish between
	something that should be a number and something that should be a label.
	
	MORE INFORMATION
	================
	
	Assembling the following code will result in the following errors, since the
	assembler will assume that ABh is a label
	
	  MASM 5.0, 5.1: error A2009: Symbol not defined: ABh
	  MASM 6.0: error A2006: undefined symbol: ABh
	
	Sample Code
	-----------
	
	  ;Assemble options needed: none
	
	     .model small
	     .code
	
	        mov ax, ABh
	
	      end
	
	Additional query words: kbinf 5.00 5.10 6.00 6.00a 6.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM600 kbMASM500 kbMASM600a kbMASM600b
	Version           : :5.0,5.1,6.0,6.0a,6.0b
	
	=============================================================================
	
