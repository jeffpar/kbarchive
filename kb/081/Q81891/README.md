---
layout: page
title: "Q81891: PRB: /Fb May Cause A1006 in Low Memory Situations"
permalink: /kb/081/Q81891/
---

## Q81891: PRB: /Fb May Cause A1006 in Low Memory Situations

	Article: Q81891
	Product(s): Microsoft Macro Assembler
	Version(s): 6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the /Fb switch to create a bound executable with the Microsoft Macro
	Assembler (MASM) version 6.0, 6.0a, or 6.0b, assembling a file with "ml /Fb
	<filename>" may result in the following error:
	
	  A1006: invalid command-line option : Unable to run LINK.EXE
	
	CAUSE
	=====
	
	When running MASM in low memory situations under MS-DOS, the /Fb switch causes
	this unexpected fatal error. This typically occurs when there is less than 490K
	of available conventional memory.
	
	RESOLUTION
	==========
	
	The /Fb switch does not work in low memory situations under MS-DOS; however, it
	does work if you increase the amount of available memory under MS-DOS or if you
	run under OS/2. To work around this problem in MS-DOS, do the following:
	
	1. Assemble and link your program without the /Fb option. This will generate an
	  .EXE file.
	
	2. Run the BIND utility on the .EXE file using the syntax shown on page 5 of the
	  "Microsoft Macro Assembler Reference."
	
	Additional query words: 6.00 6.00a 6.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM600a kbMASM600b
	Version           : :6.0,6.0a,6.0b
	
	=============================================================================
	
