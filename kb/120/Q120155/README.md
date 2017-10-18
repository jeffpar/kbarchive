---
layout: page
title: "Q120155: PRB: Error A2068 Using REP Prefix with CMPS Instructions"
permalink: kb/120/Q120155/
---

## Q120155: PRB: Error A2068 Using REP Prefix with CMPS Instructions

	Article: Q120155
	Product(s): Microsoft Macro Assembler
	Version(s): 6.0,6.0a,6.0b,6.1,6.11,6.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.0, 6.0a, 6.0b, 6.1, 6.1a 
	- Microsoft Macro Assembler (MASM), version 6.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Assembling a line of code that uses the REP instruction prefix with one of the
	string-compare instructions, such as
	
	     REP CMPSB
	
	produces the following error message:
	
	  error A2068: instruction prefix not allowed
	
	The same line of code assembles without error under MASM version 5.1.
	
	CAUSE
	=====
	
	With MASM version 5.1, as well as when using MASM version 6.x with OPTION M510,
	the REP CMPSB instruction is encoded as a REPE CMPSB.
	
	NOTE: The difference between these instructions is that the REP instruction
	repeats CX times regardless of the zero flag (ZF); however, the REPE and REPNE
	instructions check the ZF flag as they repeat. Because there is virtually no
	encoding for REP CMPSB, MASM versions 6.0 and 6.1 generate an error message.
	
	RESOLUTION
	==========
	
	Assemble using the OPTION M510 directive, or use the REPE instruction prefix.
	
	MORE INFORMATION
	================
	
	The following are legal forms of the string-compare instruction:
	
	  CMPSB ; compare string byte
	  CMPSW ; compare string word
	  CMPSD ; compare string doubleword
	
	Additional query words: rep 6.00 6.00a 6.00b 6.10 6.10a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM610 kbMASM611 kbMASM610a kbMASM600a kbMASM600b
	Version           : :6.0,6.0a,6.0b,6.1,6.11,6.1a
	
	=============================================================================
	
