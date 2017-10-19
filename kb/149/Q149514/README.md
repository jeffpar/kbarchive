---
layout: page
title: "Q149514: BUG: Developer Studio Hangs with !MS&#36;FIXEDFORMLINESIZE: 132"
permalink: /kb/149/Q149514/
---

## Q149514: BUG: Developer Studio Hangs with !MS&#36;FIXEDFORMLINESIZE: 132

	Article: Q149514
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbide kbVCkbbuglist
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Developer Studio, if you use !ms$fixedformlinesize or the $fixedformlinesize
	metacommand at the beginning of a fixed-form source file in the editor and type
	in 132 or more characters on a single line, Developer Studio hangs or quits with
	the following error:
	
	Under Windows NT version 3.51:
	
	  The instruction at "0x77f87dd1 referenced memory at "0xd072a417".
	  The memory could not be "read".
	
	Under Windows 95:
	
	  No error message - Developer Studio hangs
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. In Developer Studio, create a new text file with the .for extension.
	
	2. On the first line in column 1, type the following and save the file:
	
	  " !MS$FIXEDFORMLINESIZE: 132 " (without the quotation marks)
	
	3. On the next line, press the TAB key to move to column 7, and type the
	  character x repeatedly beyond the 132 column mark in the editor.
	
	4. Press the ENTER key to get to the beginning of the next line, and then press
	  the UP ARROW key followed by the END key to get to the end of the text you
	  typed in step 3. This causes Developer Studio to either hang or generate an
	  Access Violation.
	
	Additional query words: crash 4.00
	
	======================================================================
	Keywords          : kbide kbVC kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
