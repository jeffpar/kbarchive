---
layout: page
title: "Q30382: FIX: Command Line Option /Z Is Ignored after Processing"
permalink: kb/030/Q30382/
---

## Q30382: FIX: Command Line Option /Z Is Ignored after Processing

	Article: Q30382
	Product(s): Microsoft Macro Assembler
	Version(s): 5.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 5.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The /Z command line option tells the assembler to print out any offending lines
	and any error messages it generates. The switch will work up to the first
	include statement. When an include file is processed a flag is cleared by
	mistake.
	
	RESOLUTION
	==========
	
	The workaround for this problem is to bracket the include directive by the
	.XLIST or .LIST directive. Do not include a .LIST directive in the include file.
	This process will guarantee that the flag is set after the include file is
	processed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Macro Assembler (MASM)
	version 5.1. This problem was corrected in MASM version 5.1a.
	
	Additional query words: 5.10 buglist5.10 fixlist5.10a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510
	Version           : :5.1
	Solution Type     : kbfix
	
	=============================================================================
	
