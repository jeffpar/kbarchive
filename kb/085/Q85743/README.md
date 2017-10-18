---
layout: page
title: "Q85743: FIX: Error L1057 Generated When Assembling with /Zi"
permalink: kb/085/Q85743/
---

## Q85743: FIX: Error L1057 Generated When Assembling with /Zi

	Article: Q85743
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
	
	When using Microsoft Macro Assembler version 6.0, 6.0a, or 6.0b to assemble a
	program that has a large structure, specifying CodeView information with the /Zi
	switch on the assembler and the /CO switch on the linker may cause the following
	linker error:
	
	  fatal error L1057: data record too large
	
	CAUSE
	=====
	
	MASM generates an incorrect LEDATA record when the source code declares large
	data structures.
	
	
	RESOLUTION
	==========
	
	Reducing the length of one of the longer field names in the structure will
	eliminate the error.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM versions 6.0, 6.0a, and
	6.0b. This problem was corrected in MASM for MS-DOS version 6.1.
	
	MORE INFORMATION
	================
	
	The following sample code demonstrates the problem. Reducing the length of one
	of the longer field names eliminates the error.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: /Zi
	
	  .MODEL small
	
	  BIGstruc STRUC
	
	  longvarname1          DB 20 DUP (?)
	  longvarname2          DB 20 DUP (?)
	  longvarname3          DB 20 DUP (?)
	  longvarname4          DB 20 DUP (?)
	  longvarname5          DB 20 DUP (?)
	  longvarname6          DB 20 DUP (?)
	  longvarname7          DB 20 DUP (?)
	  longvarname8          DB 20 DUP (?)
	  longvarname9          DB 20 DUP (?)
	
	  longervarname10       DB 0
	  longervarname11       DB 0
	  longervarname12       DB 0
	  longervarname13       DB 0
	  longervarname14       DB 0
	  longervarname15       DB 0
	  longervarname16       DB 0
	  longervarname17       DB 0
	  longervarname18       DB 0
	  longervarname19       DB 0
	  longervarname20       DB 0
	  longervarname21       DB 0
	  longervarname22       DB 0
	  longervarname23       DB 0
	  longervarname24       DB 0
	  longervarname25       DB 0
	  longervarname26       DB 0
	  longervarname27       DB 0
	  longervarname28       DB 0
	  longervarname29       DB 0
	
	  evenlongervarname30   DB 0
	  evenlongervarname31   DB 0
	  evenlongervarname32   DB 0
	  evenlongervarname33   DB 0
	  evenlongervarname34   DB 0
	  evenlongervarname35   DB 0
	  evenlongervarname36   DB 0
	  evenlongervarname37   DB 0
	  evenlongervarname38   DB 0
	  evenlongervarname39   DB 0
	  evenlongervarname40   DB 0
	  evenlongervarname41   DB 0
	  evenlongervarname42   DB 0
	  evenlongervarname43   DB 0
	  evenlongervarname44   DB 0
	  evenlongervarname45   DB 0
	  evenlongervarname46   DB 0
	  evenlongervarname47   DB 0
	  evenlongervarname48   DB 0
	  evenlongervarname49   DB 0
	
	  theverylongestvarname DB 0
	
	  BIGstruc ENDS
	
	  .STACK 4096
	
	  .DATA
	  BIGvar BIGstruc <>
	
	  .CODE
	  start:
	     mov ax, 4C00h
	     int 21h
	  END start
	
	Additional query words: 6.00 6.00a 6.00b buglist6.00 buglist6.00a buglist6.00b fixlist6.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM600a kbMASM600b
	Version           : MS-DOS:6.0,6.0a,6.0b
	Solution Type     : kbfix
	
	=============================================================================
	
