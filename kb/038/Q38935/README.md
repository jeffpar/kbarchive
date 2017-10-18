---
layout: page
title: "Q38935: Expressions in Definitions Changed for MASM 5.10"
permalink: kb/038/Q38935/
---

## Q38935: Expressions in Definitions Changed for MASM 5.10

	Article: Q38935
	Product(s): Microsoft Macro Assembler
	Version(s): 5.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 5.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In all versions of Microsoft Macro Assembler earlier than version 5.1, you could
	not have an expression with a larger than 16-bits in a definition. This has been
	changed in version 5.1.
	
	MORE INFORMATION
	================
	
	In all versions of MASM before version 5.1, you could use constants of greater
	than 16 bits; however, you could not use an arithmetic expression to obtain a
	number larger than 16 bits.
	
	The following is an example:
	
	     DD 86400     <-  correct.
	     DD 60*60*24  <-  incorrect. This would be truncated at the
	                                 16-bit value.
	
	This feature has been implemented in version 5.1 so that both of the above
	declarations will yield the same answer.
	
	Additional query words: kbinf 5.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510
	Version           : :5.1
	
	=============================================================================
	
