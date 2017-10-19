---
layout: page
title: "Q119872: PRB: Error A2032 Using Indexed Addressing"
permalink: /kb/119/Q119872/
---

## Q119872: PRB: Error A2032 Using Indexed Addressing

	Article: Q119872
	Product(s): Microsoft Macro Assembler
	Version(s): 6.0,6.0a,6.0b,6.1,6.11,6.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.0, 6.0a, 6.0b, 6.1, 6.1a, 6.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Assembling a line of code that performs indexed addressing, such as the
	following:
	
	  mov dx,mylabel-2[bx]
	
	produces the following error:
	
	  error A2032: invalid use of register
	
	The same line of code assembles without error under MASM version 5.1.
	
	CAUSE
	=====
	
	The index operator '[]' is now at the very top of the MASM operator precedence
	list, while the binary "+" and "-" operators are in the lower half. So, for
	example, if the expression
	
	  2 - 3[bx]
	
	is no longer equivalent to
	
	  2 - 3 + bx
	
	but rather to
	
	  2 - (3 + bx) ; or 2 - 3 - bx
	
	then it is the "- bx" that is causing the A2032 error.
	
	RESOLUTION
	==========
	
	Assemble using the OPTION M510 directive, the /Zm switch (which implies the
	OPTION M510), or use one of the following syntaxes:
	
	  mov dx, (mylabel-2)[bx]
	  mov dx, mylabel-2+[bx]
	  mov dx, mylabel[bx]-2
	
	NOTE: The OPTION M510 is used for compilation with maximum MASM version 5.10
	compatibility.
	
	Additional query words: 6.00 6.00a 6.00b 6.10 6.10a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM610 kbMASM611 kbMASM610a kbMASM600a kbMASM600b
	Version           : :6.0,6.0a,6.0b,6.1,6.11,6.1a
	
	=============================================================================
	
