---
layout: page
title: "Q39527: DOCERR: DUP Is a Reserved Word in MASM"
permalink: /kb/039/Q39527/
---

## Q39527: DOCERR: DUP Is a Reserved Word in MASM

	Article: Q39527
	Product(s): Microsoft Macro Assembler
	Version(s): MS-DOS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The table of reserved words in MASM on Page 69 of the "Microsoft Macro Assembler
	Programmer's Guide" does not include DUP. DUP is an operator for defining
	arrays, buffers and other data structures consisting of multiple data objects of
	the same size. DUP cannot be used as a variable. For example, the following
	statement allocates the string "Test " five times for a total of 20 bytes:
	
	     DB   5 DUP ("Test ")
	
	Additional query words: 5.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper
	Version           : MS-DOS:
	
	=============================================================================
	
