---
layout: page
title: "Q123661: BUG: No Error or Code for Multiple END Statements"
permalink: kb/123/Q123661/
---

## Q123661: BUG: No Error or Code for Multiple END Statements

	Article: Q123661
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
	
	The assembler issues no errors for the following sample code, which contains
	more than one END statement:
	
	     .model small
	     .code
	
	     RET
	
	     END
	
	     RET
	
	     END
	
	No code is generated for the RET after the first end.
	
	RESOLUTION
	==========
	
	Remove any code that appears after the first END statement.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 6.11 buglist6.11
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM611
	Version           : :6.11
	
	=============================================================================
	
