---
layout: page
title: "Q35881: Name Directive No Longer Supported"
permalink: kb/035/Q35881/
---

## Q35881: Name Directive No Longer Supported

	Article: Q35881
	Product(s): Microsoft Macro Assembler
	Version(s): 5.0,5.1,5.1a,6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.0, 5.1, 5.1a, 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The NAME directive was available in MASM version 4.0. The directive, NAME
	modulename, sets the name of the current module to modulename. A module name is
	used by the linker when displaying error messages.
	
	In MASM versions 5.0, 5.1, 5.1a, 6.0, 6.0a, and 6.0b the old directive does not
	generate an assembler error so that the assembler provides downward
	compatibility with MASM version 4.0 source files. The directive does not
	generate any extra information for MASM versions 5.0, 5.1, 5.1a, 6.0, 6.0a, and
	6.0b.
	
	Additional query words: kbinf 5.00 5.10 5.10a 6.00 6.00a 6.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM600 kbMASM500 kbMASM600a kbMASM510a kbMASM600b
	Version           : :5.0,5.1,5.1a,6.0,6.0a,6.0b
	
	=============================================================================
	
