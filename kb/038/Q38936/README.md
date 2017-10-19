---
layout: page
title: "Q38936: DOCERR: &#91;bx&#93;.month Example Incorrect in MASM Programmer's Guide"
permalink: /kb/038/Q38936/
---

## Q38936: DOCERR: &#91;bx&#93;.month Example Incorrect in MASM Programmer's Guide

	Article: Q38936
	Product(s): Microsoft Macro Assembler
	Version(s): 5.0,5.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.0, 5.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The code fragment in section 7.1.3 on Page 147 of the "Microsoft Macro Assembler
	Programmer's Guide" causes a warning A4031: "Operand types must match." There is
	an error in the example.
	
	Change the line below
	
	  mov ax, [bx].month
	
	to the following:
	
	  " mov ah, [bx].month " (without the quotation marks)
	
	MORE INFORMATION
	================
	
	Because the structure field month is defined as a byte, the assignment to a word
	register generates the operand-mismatch warning message. The change to a byte
	register resolves the warning. The following is also acceptable:
	
	  " mov ax, word ptr [bx].month " (without the quotation marks)
	
	Additional query words: 5.00 5.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM500
	Version           : :5.0,5.1
	
	=============================================================================
	
