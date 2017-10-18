---
layout: page
title: "Q77078: FIX: Whitespace Character Must Precede DUP Operator"
permalink: kb/077/Q77078/
---

## Q77078: FIX: Whitespace Character Must Precede DUP Operator

	Article: Q77078
	Product(s): Microsoft Macro Assembler
	Version(s): MS-DOS:6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the DUP operator in the Microsoft Macro Assembler (MASM), you must
	place a whitespace character before the DUP operator if using the "?" operator.
	If no whitespace is present, no error message is produced by the assembler, and
	incorrect code will be generated. The assembler will generate one data item for
	the specified type, initialized to the value of the repeat size for the DUP
	operator.
	
	RESOLUTION
	==========
	
	To work around the problem, place a space between the repeat size and the DUP
	operator. Initializing the variable will cause a syntax error to be generated.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM version 6.0, 6.0a, and
	6.0b. This problem was corrected in MASM for MS-DOS version 6.1.
	
	MORE INFORMATION
	================
	
	The code example below generates a listing file that shows the size generated
	for the respective DUP statements. It can be seen that the first DUP operation
	generates 4 data bytes; however, the second generates 1 data byte initialized to
	4.
	
	The assembler has problems parsing this statement because the DUP operator begins
	with a letter (d), which is a valid radix suffix.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: /Fl
	
	  .MODEL small
	  .STACK 4096
	
	  .DATA
	  a       DB 4 DUP(0)
	  size_a  DB SIZEOF a
	  b       DB 4DUP(?)
	  size_b  DB SIZEOF b
	
	  .CODE
	  start:
	     mov ax, 4C00H
	     int 21H      ; Terminate Process
	  END start
	
	Additional query words: 6.00 6.00a 6.00b buglist6.00 buglist6.00a buglist6.00b fixlist6.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM600a kbMASM600b
	Version           : MS-DOS:6.0,6.0a,6.0b
	Solution Type     : kbfix
	
	=============================================================================
	
