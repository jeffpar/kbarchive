---
layout: page
title: "Q83087: FIX: MASM Moves Segment Register w/out Generating Error"
permalink: kb/083/Q83087/
---

## Q83087: FIX: MASM Moves Segment Register w/out Generating Error

	Article: Q83087
	Product(s): Microsoft Macro Assembler
	Version(s): 6.0,6.0a,6.0b,6.1,6.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.0, 6.0a, 6.0b, 6.1, 6.1a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Macro Assembler (MASM) may move a segment register instead of
	generating an error on an invalid code statement. In the following example, the
	statement:
	
	     mov bx, es[1234h]
	
	should generate an error. However, MASM treats the statement as:
	
	     mov bx, es
	
	and thus does not generate the code that may be expected. The code that the user
	anticipated being generated was:
	
	     mov bx, es:[1234h]
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM versions 6.0, 6.0a, 6.0b,
	6.1, and 6.1a. This problem was corrected in MASM for MS-DOS version 6.11.
	
	MORE INFORMATION
	================
	
	The following program should generate two assembler errors but does not:
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	  .MODEL small
	  .386
	  .STACK 4096
	
	  .CODE
	  start:
	     mov bx,es[1234h]     ; This should generate an error.
	     mov es[1234h],bx     ; This should generate an error.
	     mov ax, 4C00h
	     int 21h
	  END start
	
	Additional query words: 6.00 6.00a 6.00b 6.10 6.10a buglist6.00a buglist6.00b buglist6.10 buglist6.10a fixlist6.11
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM610 kbMASM610a kbMASM600a kbMASM600b
	Version           : :6.0,6.0a,6.0b,6.1,6.1a
	Solution Type     : kbfix
	
	=============================================================================
	
