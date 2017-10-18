---
layout: page
title: "Q73753: DOCERR: Date Format in Listing File Incorrect in MASM 6.0 Manual"
permalink: kb/073/Q73753/
---

## Q73753: DOCERR: Date Format in Listing File Incorrect in MASM 6.0 Manual

	Article: Q73753
	Product(s): Microsoft Macro Assembler
	Version(s): MS-DOS:6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	On page 610 of the "Microsoft Macro Assembler Programmer's Guide" version 6.0
	manual, there is an example of a listing file accompanied by instructions on how
	to read such a file. In the header of the sample listing, the date is printed in
	the following format:
	
	  MMM DD hh:mm:ss yyyy
	
	This format was from a beta version of Macro Assembler (MASM) 6.0 that was used
	when the documentation was written and is not consistent with the output in the
	released version. In the released version, the date prints in the following
	format:
	
	  MM/DD/YY hh:mm:ss
	
	Additional query words: 6.00 6.00a 6.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM600a kbMASM600b
	Version           : MS-DOS:6.0,6.0a,6.0b
	
	=============================================================================
	
