---
layout: page
title: "Q73189: FIX: MASM 6.0 ML Driver Does Not Pass /nologo to LINK Correctly"
permalink: /kb/073/Q73189/
---

## Q73189: FIX: MASM 6.0 ML Driver Does Not Pass /nologo to LINK Correctly

	Article: Q73189
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
	
	If you attempt to suppress the LINK copyright banner by specifying the /nologo
	switch on the command line of the ML.EXE driver in the Microsoft Macro Assembler
	(MASM) version 6.0, 6.0a, or 6.0b, ML does not pass /nologo to the linker
	correctly.
	
	CAUSE
	=====
	
	The /nologo option is used to suppress the display of the copyright banner for
	Microsoft language products and utilities. For example, the assembler may be
	invoked as follows:
	
	  ml /nologo test.asm
	
	This will assemble a file without first displaying the assembler copyright
	message. To pass the /nologo switch to the linker, the following command line
	should be used:
	
	  ml test.asm /link /nologo
	
	This does not work properly with the ML driver. The /nologo switch is passed in
	the "library" response area and is not seen by LINK until after the copyright
	banner has been displayed.
	
	RESOLUTION
	==========
	
	There are two workarounds for this problem:
	
	1. Invoke LINK separately with the /nologo switch.
	
	-or-
	
	2. Set the LINK environment variable as follows to specify the that /nologo
	  option should be used at all times:
	
	        SET LINK=/nologo
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM version 6.0, 6.0a, and
	6.0b. This problem was corrected in MASM for MS-DOS version 6.1.
	
	Additional query words: 6.00 6.00a 6.00b buglist6.00 buglist6.00a buglist6.00b fixlist6.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM600a kbMASM600b
	Version           : MS-DOS:6.0,6.0a,6.0b
	Solution Type     : kbfix
	
	=============================================================================
	
