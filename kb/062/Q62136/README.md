---
layout: page
title: "Q62136: DOCERR: EXE2BIN.EXE Doesn't Come w/ PC-DOS 3.3, 4.0, &amp; 4.01"
permalink: kb/062/Q62136/
---

## Q62136: DOCERR: EXE2BIN.EXE Doesn't Come w/ PC-DOS 3.3, 4.0, &amp; 4.01

	Article: Q62136
	Product(s): Microsoft Macro Assembler
	Version(s): 5.0,5.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.0, 5.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Page 19 of the "Microsoft Macro Assembler 5.1 Programmer's Guide" incorrectly
	states that "(EXE2BIN.EXE file) is not included in the Macro Assembler package,
	but it does come with the MS-DOS and PC-DOS operating systems." The Macro
	Assembler package comes with MS-DOS, but does not come with PC-DOS versions 3.3,
	4.0, and 4.01.
	
	  EXE2BIN comes with:    Works with:         Does not work with:
	  -------------------    ----------          -------------------
	
	  1. MS-DOS 3.30         MS-DOS 3.30         MS-DOS 4.00 & 4.01
	                         PC-DOS 3.30         PC-DOS 4.00 & 4.01
	
	  2. MS-DOS 4.40 & 4.41  MS-DOS 4.00 & 4.01  MS-DOS 3.30
	                         PC-DOS 4.00 & 4.01  PC-DOS 3.30
	
	     Note: You will get the message "Incorrect DOS version."
	
	The EXE2BIN.EXE files that come with MS-DOS versions 4.0 and 4.01 are identical.
	They have been tested by using the COMP command.
	
	Additional query words: 5.00 5.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM500
	Version           : :5.0,5.1
	
	=============================================================================
	
