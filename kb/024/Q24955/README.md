---
layout: page
title: "Q24955: Results of not Specifying a Starting Address"
permalink: /kb/024/Q24955/
---

## Q24955: Results of not Specifying a Starting Address

	Article: Q24955
	Product(s): Microsoft Macro Assembler
	Version(s): 3.0x,4.x,5.0,5.1,6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 3.0x, 4.x, 5.0, 5.1, 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If a starting address is not explicitly specified, then the starting address
	will be one of the following:
	
	1. The beginning of the code if the simplified segment directives .model and
	  .code are used (MASM 5.0 and later).
	
	-or-
	
	2. The first segment loaded into memory if full segment directives are used.
	  This will result in the execution of the data segment if it is the first
	  segment loaded and the results will be unpredictable.
	
	Versions of the linker prior to version 5.05 do not warn if a starting address is
	not specified. Link version 5.13 (shipped with MASM 6.0) issues the following
	warning:
	
	  L4038: program has no starting address
	
	MORE INFORMATION
	================
	
	The END directive is used to mark the end of the source file and can optionally
	be used to set the starting address which will be loaded into CS:IP when the
	program executes. For example
	
	     END start
	
	would specify that execution should begin at the label named start.
	
	Additional query words: kbinf 3.x 4.x 5.00 5.10 6.00 6.00a 6.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM600 kbMASM30xSearch kbMASM500 kbMASM600a kbMASM600b
	Version           : :3.0x,4.x,5.0,5.1,6.0,6.0a,6.0b
	
	=============================================================================
	
