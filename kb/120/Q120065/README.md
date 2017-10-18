---
layout: page
title: "Q120065: BUG: Help Files Not Available After Installing Samples Only"
permalink: kb/120/Q120065/
---

## Q120065: BUG: Help Files Not Available After Installing Samples Only

	Article: Q120065
	Product(s): Microsoft Macro Assembler
	Version(s): 6.1,6.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.1, 6.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Run the setup program and install everything but the samples. Run the setup
	program again and install only the samples. The NEW-VARS.BAT file is rewritten,
	but without setting the HELPFILES environment variable, because the Help files
	were not just installed. As a result, the Help files are not available in
	Programmer's WorkBench (PWB).
	
	RESOLUTION
	==========
	
	Edit the NEW-VARS.BAT and set the HELPFILES environment variable. As an example,
	if MASM is installed in C:\MASM611, then set HELPFILES to C:\MASM611\HELP\*.HLP.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in MASM versions 6.1 and 6.11. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: 6.10 6.11 buglist6.10 buglist6.11
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM610 kbMASM611
	Version           : :6.1,6.11
	
	=============================================================================
	
