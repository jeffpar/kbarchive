---
layout: page
title: "Q67439: DOCERR: MASM 5.1 Instructions Operand Size Documented Wrong"
permalink: /kb/067/Q67439/
---

## Q67439: DOCERR: MASM 5.1 Instructions Operand Size Documented Wrong

	Article: Q67439
	Product(s): Microsoft Macro Assembler
	Version(s): 5.0,5.1,5.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.0, 5.1, 5.1a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the "Microsoft Macro Assembler 5.1 Reference" manual, a number of
	instructions indicate that their operand size is a mem64 when they should
	indicate an operand size of mem48. The instructions are documented incorrectly
	as LGDT, LIDT, LLDT, SGDT, SIDT, and SLDT. These instructions require the FWORD
	PTR operator and not the QWORD PTR operator. If the QWORD PTR operator is used,
	the Microsoft Macro Assembler (MASM) will generate the following warning:
	
	  warning A4057: illegal size for operand
	
	These instructions are privileged 286 and 386 instructions that are used to load
	and save the protected mode descriptor table registers. These registers are only
	6 bytes long, even though descriptor table entries are normally 8 bytes.
	
	Additional query words: 5.00 5.10 5.10a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM500 kbMASM510a
	Version           : :5.0,5.1,5.1a
	
	=============================================================================
	
