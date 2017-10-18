---
layout: page
title: "Q79157: FIX: H2INC Doesn't Recognize /BATCH Command-Line Switch"
permalink: kb/079/Q79157/
---

## Q79157: FIX: H2INC Doesn't Recognize /BATCH Command-Line Switch

	Article: Q79157
	Product(s): Microsoft C Compiler
	Version(s): OS/2:1.0; winnt:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	It is documented that H2INC version 1.0, which shipped with Microsoft Macro
	Assembler (MASM) versions 6.0, 6.0a, and 6.0b, recognizes but ignores C 6.0
	options that aren't specified as an H2INC option. However, the /BATCH switch
	produces the following error:
	
	  fatal error HI1800: '/BATCH' : unrecognized option
	
	This is most prevalent while working in the Microsoft Programmer's WorkBench
	(PWB) where the /BATCH switch is added by default to the compiler switches that
	H2INC uses when it is called.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in H2INC version 1.0. This problem
	was corrected in H2INC for MS-DOS version 1.1 which is included with MASM for
	MS-DOS version 6.1.
	
	Additional query words: 6.00 6.00a 6.00b 1.00 buglist1.00 fixlist1.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM100
	Version           : OS/2:1.0; winnt:1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
