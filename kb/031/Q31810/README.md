---
layout: page
title: "Q31810: Writing Faster Macro Assembler Programs"
permalink: kb/031/Q31810/
---

## Q31810: Writing Faster Macro Assembler Programs

	Article: Q31810
	Product(s): Microsoft Macro Assembler
	Version(s): 4.0,5.0,5.1,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 4.0, 5.0, 5.1, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Macro Assembler is useful for writing fast programs. For example,
	the following is a fast method to take the absolute value of a number held in
	the AX register:
	
	     cwd          ; replicate the high bit into DX
	     xor  ax, dx  ; take 1's complement if negative; no change if positive
	     sub  ax, dx  ; AX is 2's complement if it was negative The standard
	                  : absolute value method works on any register but is much
	                  ; slower:
	
	     or   bx, bx  ; see if number is negative
	     jge  notneg  ; if it is negative...
	     neg  bx      ; ...make it positive
	  notneg:         ; jump to here if positive
	
	MORE INFORMATION
	================
	
	This method achieves part of its speed by avoiding the use of a jump instruction
	to keep the 8086's pre-fetch queue full.
	
	To save time while a program is running, the 8086 tries to fetch the next
	instruction from memory while it is processing the current instruction. However,
	a jump instruction moves the location of the next instruction to fetch, making
	invalid the instruction that the 8086 just fetched into its pre-fetch queue.
	
	This process forces the 8086 to spend time fetching the correct instruction from
	memory after the jump. Whenever possible, avoid jumps to increase the execution
	speed of Macro Assembler programs.
	
	Additional query words: 4.00 5.00 5.10 6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM600 kbMASM400 kbMASM500
	Version           : :4.0,5.0,5.1,6.0
	
	=============================================================================
	
