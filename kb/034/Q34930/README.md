---
layout: page
title: "Q34930: FIX: MASM Generates Stack Overflow on Code with Redefinition"
permalink: kb/034/Q34930/
---

## Q34930: FIX: MASM Generates Stack Overflow on Code with Redefinition

	Article: Q34930
	Product(s): Microsoft Macro Assembler
	Version(s): 5.1,5.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.1, 5.1a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The example code below causes the Microsoft Macro Assembler (MASM) versions 5.10
	and 5.10a to generate the error message,
	
	  run-time error R6000
	  - stack overflow
	
	CAUSE
	=====
	
	The redefinition of a symbol. It is defined as an equate and as a macro.
	
	RESOLUTION
	==========
	
	The workaround is to remove the redefinition of "xx". MASM version 6.0 and later
	correctly generate errors in this situation
	
	  A2008: syntax error: macro
	  A1008: unmatched macro nesting
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with MASM versions 5.10 and 5.10a.
	This problem was corrected in MASM version 6.00.
	
	MORE INFORMATION
	================
	
	The following sample code demonstrates the problem.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	        .model   small
	        .code
	
	  xx    EQU      <nop>
	
	  xx    macro
	        NOP
	        endm
	
	        xx
	
	        END
	
	Additional query words: 5.10 5.10a buglist5.10 buglist5.10a fixlist6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM510a
	Version           : :5.1,5.1a
	Solution Type     : kbfix
	
	=============================================================================
	
