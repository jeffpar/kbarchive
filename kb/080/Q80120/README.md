---
layout: page
title: "Q80120: FIX: MASM 6.0 May Incorrectly Generate A2032 for EQU"
permalink: kb/080/Q80120/
---

## Q80120: FIX: MASM 6.0 May Incorrectly Generate A2032 for EQU

	Article: Q80120
	Product(s): Microsoft Macro Assembler
	Version(s): 6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Macro Assembler may incorrectly generate the following error:
	
	  A2032: invalid use of register
	
	CAUSE
	=====
	
	This is demonstrated on lines eight and nine in the sample code below. The error
	occurs because the LEA and MOV instructions on those lines use an equate and a
	register as an address. In the example, table1 is equated to the value of the
	location counter, "$", and the register is BP.
	
	RESOLUTION
	==========
	
	To work around the problem, use the LABEL directive rather than an equate of the
	current location counter.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM versions 6.0, 6.0a, and
	6.0b. This problem was corrected in MASM for MS-DOS version 6.1.
	
	MORE INFORMATION
	================
	
	The following sample code can be used to demonstrate the problem.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	  code SEGMENT word public 'code'
	  ASSUME cs:code
	
	  table1 EQU $
	  ;table1 LABEL word      ; Use this line instead of previous one.
	  table2 DW 0
	
	     lea di, table1[bp]   ; line 8
	     mov ax, table1[bp]   ; line 9
	  code ENDS
	
	  END
	
	Additional query words: 6.00 6.00a 6.00b buglist6.00 buglist6.00a buglist6.00b fixlist6.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM600a kbMASM600b
	Version           : :6.0,6.0a,6.0b
	Solution Type     : kbfix
	
	=============================================================================
	
