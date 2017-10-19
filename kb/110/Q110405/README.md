---
layout: page
title: "Q110405: PRB: MASM 6.x and the Windows 3.1 DDK"
permalink: /kb/110/Q110405/
---

## Q110405: PRB: MASM 6.x and the Windows 3.1 DDK

	Article: Q110405
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
	
	The Macro Assembler (MASM) versions 6.0 and later may fail and report errors
	when you try to build a virtual device driver (VxD) or sample from the Windows
	3.1 Device Driver Kit (DDK). These errors can include:
	
	- warning A4004: cannot assume CS
	
	- warning A4006: too many arguments in macro call
	
	- warning A4007: (command line) option untranslated, directive required
	
	- warning A4017: invalid command-line option
	
	- error A2008: syntax error : EQU
	
	- error A2107: cannot have implicit far jump or call to near label
	
	CAUSE
	=====
	
	The reason for MASM's failure and the error messages is that the include (.INC)
	files and samples shipped with the Windows 3.1 DDK were written to be used with
	MASM version 5.1b. MASM 5.1b was designed for and is included with the DDK, and
	is not available as a separate product.
	
	RESOLUTION
	==========
	
	To avoid these problems you should use MASM 5.1b that is shipped with the DDK to
	build VxDs and the DDK samples.
	
	Additional query words: 5.10b 6.00 6.00a 6.00b 6.10 6.10a VMM.INC CMACROS.INC WIN16SDK
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM610 kbMASM611 kbMASM610a kbMASM600a kbMASM600b
	Version           : :6.0,6.0a,6.0b,6.1,6.11,6.1a
	
	=============================================================================
	
