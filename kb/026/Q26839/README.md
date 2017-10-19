---
layout: page
title: "Q26839: PRB: &quot;AT&quot; Combine Types"
permalink: /kb/026/Q26839/
---

## Q26839: PRB: &quot;AT&quot; Combine Types

	Article: Q26839
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
	
	The Microsoft Macro Assembler will generate a misleading error message when a
	segment with the AT combine type is specified with a segment value that is too
	large. The error message generated will be:
	
	  error A2029: Division by 0 or overflow
	
	It is not clear from the error message that the segment value was too large.
	
	CAUSE
	=====
	
	This is the expected behavior of MASM 5.0, 5.1, and 5.1a.
	
	RESOLUTION
	==========
	
	MASM 6.0 now generates the following error message:
	
	  error A2084: constant value too large
	
	MORE INFORMATION
	================
	
	The following sample code can be used to demonstrate the problem.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	  S1  SEGMENT AT  01234H   ; This segment is OK
	  S2  ENDS
	
	  S2  SEGMENT AT  12345H   ; This segment generates a misleading error
	  S2  ENDS
	
	  END
	
	Additional query words: 5.00 5.10 5.10a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM500 kbMASM510a
	Version           : :5.0,5.1,5.1a
	
	=============================================================================
	
