---
layout: page
title: "Q34375: DOCERR: Documentation Error on the LGDT Instruction"
permalink: /kb/034/Q34375/
---

## Q34375: DOCERR: Documentation Error on the LGDT Instruction

	Article: Q34375
	Product(s): Microsoft Macro Assembler
	Version(s): 5.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 5.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The "Microsoft Macro Assembler 5.10 Reference Guide" states that the LGDT
	instruction only takes a memory 64 operand while the Intel manual states the
	LGDT instruction takes a memory 48 operand.
	
	The MASM Reference is incorrect. The correct operand size is memory 48. These
	instructions load essentially a 2-field structure whose total size is 48 bits.
	The first two bytes are the limit field and the last four bytes are the base
	field. This can be defined using the DF directive, or by defining a structure as
	described.
	
	Additional query words: 5.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510
	Version           : :5.1
	
	=============================================================================
	
