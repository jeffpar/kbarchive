---
layout: page
title: "Q136545: BUG: Macro with Line Continuation Interprets &quot;;&quot; Incorrectly"
permalink: kb/136/Q136545/
---

## Q136545: BUG: Macro with Line Continuation Interprets &quot;;&quot; Incorrectly

	Article: Q136545
	Product(s): Microsoft Macro Assembler
	Version(s): 6.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 6.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use a line continuation character in a macro to split up the parameter
	list, embedded semicolons (;) are interpreted as the beginning of comments.
	Embedded semicolons in string literals should be ignored and assumed part of the
	string itself.
	
	RESOLUTION
	==========
	
	Replace the embedded semicolon with a hex literal. In this example:
	
	     defstr    macro   english,french,german
	               endm
	
	               defstr "YEAH",\ 
	                      "YE;AH",\ 
	                      "YEAH"
	
	Change the call to the macro to this:
	
	     defstr "YEAH",\ 
	            "YE"3Bh"AH",\ 
	            "YEAH"
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create and compile a program containing this code:
	
	     defstr    macro   english,french,german
	               endm
	
	               defstr "YEAH",\ 
	                      "YE;AH",\ 
	                      "YEAH"
	
	2. Notice that the Assembler generates these message:
	
	  Microsoft (R) Macro Assembler Version 6.11
	  Copyright (C) Microsoft Corp 1981-1994. All rights reserved.
	
	  Assembling: test.asm
	  test.asm(21) : error A2008: syntax error : YEAH
	
	Additional query words: 6.11
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM611
	Version           : :6.11
	
	=============================================================================
	
