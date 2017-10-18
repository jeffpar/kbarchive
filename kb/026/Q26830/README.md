---
layout: page
title: "Q26830: FIX: Code Segment Defined within a Procedure"
permalink: kb/026/Q26830/
---

## Q26830: FIX: Code Segment Defined within a Procedure

	Article: Q26830
	Product(s): Microsoft Macro Assembler
	Version(s): 5.0,5.0a,5.1,5.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.0, 5.0a, 5.1, 5.1a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Macro Assembler (MASM) versions 5.0, 5.0a, 5.1, and 5.1a assembles the
	following invalid sample code without genering any error messages:
	
	     myproc proc far
	     code segment
	     ret
	     code ends
	     myproc endp
	     end
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM version 5.0, 5.0a, 5.1,
	5.1a. This problem was corrected in MASM version 6.0.
	
	Additional query words: 5.00 5.00a 5.10 5.10a buglist5.00 buglist5.00a buglist5.10 buglist5.10a fixlist6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM500 kbMASM510a
	Version           : :5.0,5.0a,5.1,5.1a
	Solution Type     : kbfix
	
	=============================================================================
	
