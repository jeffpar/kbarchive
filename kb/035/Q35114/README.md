---
layout: page
title: "Q35114: PRB: Comparison of a Constant and a Relocatable Is Not Allowed"
permalink: /kb/035/Q35114/
---

## Q35114: PRB: Comparison of a Constant and a Relocatable Is Not Allowed

	Article: Q35114
	Product(s): Microsoft Macro Assembler
	Version(s): 5.1,5.1a,6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.1, 5.1a, 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The comparison of a constant and a relocatable is not allowed. The following
	example demonstrates three approaches to comparing a constant and a relocatable.
	In the Microsoft Macro Assembler (MASM) 5.1 and 5.1a you will get the warning:
	
	  warning A4031: Operand types must match
	
	on the first of these approaches. In MASM 6.0, 6.0a, and 6.0b you will get the
	error:
	
	  error A2026: constant expected
	
	on the first of these approaches, and you will get the error:
	
	  error A2094: operand must be relocatable
	
	on the second. The third approach, which turns the relocatable into a constant by
	subtracting the beginning of the segment, will work.
	
	CAUSE
	=====
	
	You can not compare a constant to a relocatable at assembly time because the
	linker may change the value of the relocatable at link time.
	
	RESOLUTION
	==========
	
	This is the expected behavior of MASM. The third approach in the example below
	demonstrates the prefered way to compare a constant and a relocatable.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	  _DATA SEGMENT 'DATA'
	
	  a_var DW ?
	
	  .ERRNZ 08000h LT a_var          ; constant LT relocatable
	  .ERRNZ _DATA:08000h LT a_var    ; cast constant to relocatable
	  .ERRNZ 08000h LT a_var- @CurSeg ; difference of relocatables
	
	  _DATA ENDS
	
	  END
	
	Additional query words: 5.10 5.10a 6.00 6.00a 6.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM600 kbMASM600a kbMASM510a kbMASM600b
	Version           : :5.1,5.1a,6.0,6.0a,6.0b
	
	=============================================================================
	
