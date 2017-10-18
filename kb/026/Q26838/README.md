---
layout: page
title: "Q26838: FIX: COMM Directive"
permalink: kb/026/Q26838/
---

## Q26838: FIX: COMM Directive

	Article: Q26838
	Product(s): Microsoft Macro Assembler
	Version(s): 5.0,5.1,5.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.0, 5.1, 5.1a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Macro Assember (MASM) versions 5.0, 5.1, and 5.1a will not
	generate an error if you incorrectly use NEAR as the size for a communal
	declaration. NEAR and FAR are not valid options for specifying the size of a
	communal variable. The example below demonstrates this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM versions 5.0, 5.1, and
	5.1a. This problem was corrected in MASM version 6.0.
	
	MORE INFORMATION
	================
	
	The following sample code can be used to demonstrate the problem.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	  .MODEL small
	
	  .DATA
	      COMM abc:NEAR   ; This should generate an error
	
	  END
	
	Additional query words: 5.00 5.10 5.10a buglist5.00 buglist5.10 buglist5.10a fixlist6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM500 kbMASM510a
	Version           : :5.0,5.1,5.1a
	Solution Type     : kbfix
	
	=============================================================================
	
