---
layout: page
title: "Q49699: DOCERR: MASM Err Msg A2063, Name in .MODEL SMALL Not Ignored"
permalink: /kb/049/Q49699/
---

## Q49699: DOCERR: MASM Err Msg A2063, Name in .MODEL SMALL Not Ignored

	Article: Q49699
	Product(s): Microsoft Macro Assembler
	Version(s): 5.0,5.1,5.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.0, 5.1, 5.1a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Page 89 of the "Microsoft Macro Assembler 5.0: Programmer's Guide" and page 89
	of the "Microsoft Macro Assembler 5.1: Programmer's Guide" incorrectly state
	that:
	
	  "Name will be ignored if given with small or compact models."
	
	With .MODEL small or .MODEL compact, the name for code segments is not ignored,
	but does produce the following error:
	
	  A2063: Operand Combination Illegal
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	  .MODEL small
	
	  .CODE home
	  start:
	      mov ax, 4C00h
	      int 21h
	  END start:
	
	Additional query words: 5.00 5.10 5.10a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM500 kbMASM510a
	Version           : :5.0,5.1,5.1a
	
	=============================================================================
	
