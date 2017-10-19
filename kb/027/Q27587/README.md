---
layout: page
title: "Q27587: Two Causes of Interrupt 0 in MASM Program"
permalink: /kb/027/Q27587/
---

## Q27587: Two Causes of Interrupt 0 in MASM Program

	Article: Q27587
	Product(s): Microsoft Macro Assembler
	Version(s): 5.0,5.1,5.1a,6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.0, 5.1, 5.1a, 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When running a program created by the Microsoft Macro Assembler, an "integer
	divide by 0" may be generated. In MASM version 6.0 and later, the error number
	generated will be R6003. The documentation for MASM version 6.0 gives the
	following explanation:
	
	  Run-time error R6003
	
	  integer divide by 0
	
	  An attempt was made to divide an integer by 0, giving an
	  undefined result.
	
	Another possible cause, documented in the Microsoft Macro Assembler version 5.0
	Programmer's Guide under DIV/IDIV, is the quotient overflowing its target
	register.
	
	Additional query words: kbinf 5.00 5.10 5.10a 6.00 6.00a 6.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM600 kbMASM500 kbMASM600a kbMASM510a kbMASM600b
	Version           : :5.0,5.1,5.1a,6.0,6.0a,6.0b
	
	=============================================================================
	
