---
layout: page
title: "Q26653: BUG: Inconsistent Case Conventions in Equate @Filename"
permalink: /kb/026/Q26653/
---

## Q26653: BUG: Inconsistent Case Conventions in Equate @Filename

	Article: Q26653
	Product(s): Microsoft Macro Assembler
	Version(s): 5.0,5.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.0, 5.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When assembled with the /ML switch, the following lines produce errors for the
	lines containing the equate @FileName:
	
	     .MODEL small
	     .STACK
	
	     .CODE
	     @filename PROC
	     @FileName ENDP
	     END
	
	The case of the predefined text equates should be consistent.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Macro Assembler (MASM)
	versions 5.0 and 5.1. This problem was corrected in Microsoft Macro Assembler
	version 6.0.
	
	Additional query words: 5.00 5.10 qfbv buglist5.00 buglist5.10 fixlist6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM500
	Version           : :5.0,5.1
	
	=============================================================================
	
