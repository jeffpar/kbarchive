---
layout: page
title: "Q73308: BUG: Class Must Be Listed Last in Full Segment Definitions"
permalink: kb/073/Q73308/
---

## Q73308: BUG: Class Must Be Listed Last in Full Segment Definitions

	Article: Q73308
	Product(s): Microsoft Macro Assembler
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The "Microsoft Macro Assembler Programmer's Guide" that ships with the Microsoft
	Macro Assembler (MASM) version 6.0 states on page 49 that "options used with the
	SEGMENT directive can be in any order." The BNF Grammar for the language also
	indicates that this should be the case; however, if a class name is specified
	and it is not the last option listed in a full segment definition, the assembler
	will generate a syntax error.
	
	RESOLUTION
	==========
	
	When using MASM version 6.0, make sure that the class is the last attribute
	listed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM version 6.0. This problem
	was corrected in MASM version 6.0a.
	
	MORE INFORMATION
	================
	
	The sample code below may be used to illustrate this problem. Assembling the
	code with MASM version 6.0 results in the following errors:
	
	  file.asm(1): error A2008: syntax error : word
	  file.asm(3): fatal error A1010: unmatched block nesting : data
	
	Because MASM 6.0 incorrectly requires a class name to be the last item in a full
	segment definition, the first error is generated when the assembler fails to
	recognize the directive option specified after the class name. The second error
	is merely a side-effect of the first.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	  data    SEGMENT PUBLIC 'DATA' WORD
	
	  data    ENDS
	
	  END
	
	Additional query words: 6.00 buglist6.00 fixlist6.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600
	Version           : MS-DOS:6.0
	
	=============================================================================
	
