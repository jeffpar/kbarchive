---
layout: page
title: "Q35113: FIX: Nested Dups in Structure Cause Recursive Loop"
permalink: kb/035/Q35113/
---

## Q35113: FIX: Nested Dups in Structure Cause Recursive Loop

	Article: Q35113
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
	
	The following code uses nested DUP operators in the initialization of an array
	of structures. The Microsoft Macro Assembler (MASM) version 5.0, 5.1, and 5.1a
	will generate a stack overflow.
	
	CAUSE
	=====
	
	MASM goes into a recursive loop at the calculation of the size.
	
	RESOLUTION
	==========
	
	You can work around this problem by initializing each of the structures instead
	of using a nested DUP operator. The example below demonstrates this work around.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM versions 5.0, 5.1, and
	5.1a. This problem was corrected in MASM version 6.0.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	  a_struc STRUC
	      a DW ?
	  a_struc ENDS
	
	  _DATA SEGMENT 'DATA'
	  a_var a_struc 4 DUP (<1>, 3 DUP (<0>))
	  b_var a_struc 4 DUP (<1>, <0>, <0>, <0>)
	  _DATA ENDS
	
	  END
	
	Additional query words: 5.00 5.10 5.10a buglist5.00 buglist5.10 buglist5.10a fixlist6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM500 kbMASM510a
	Version           : :5.0,5.1,5.1a
	Solution Type     : kbfix
	
	=============================================================================
	
