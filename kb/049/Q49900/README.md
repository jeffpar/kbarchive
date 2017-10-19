---
layout: page
title: "Q49900: PRB: Jumping to an Absolute Address with MASM"
permalink: /kb/049/Q49900/
---

## Q49900: PRB: Jumping to an Absolute Address with MASM

	Article: Q49900
	Product(s): Microsoft Macro Assembler
	Version(s): 5.0,5.1,5.1a,6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.0, 5.1, 5.1a, 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Macro Assembler (MASM) will not let you jump directly to a
	hexadecimal address. If you try to assemble:
	
	     jmp 0FFFFh:0000h
	
	You will receive the error message:
	
	  A2038: left operand must have segment
	
	CAUSE
	=====
	
	This is the expected behavior for MASM. To make a jump to an absolute address
	you must create a pointer to point to the offset inside of the segment.
	
	RESOLUTION
	==========
	
	To create a pointer to point to the offset inside of the segment in question you
	would create a segment at a specific location. For example:
	
	     bios SEGMENT AT 0FFFFh
	     ORG 0
	     reset LABEL FAR
	     bios ENDS
	
	Then, any one of the following three jump instructions will perform the jump to
	offset 0000h within segment FFFFh:
	
	     jmp FAR PTR reset
	     jmp bios:reset
	     jmp reset
	
	Note that the opcode that is generated in the listing file is EA 0000 ----
	
	MORE INFORMATION
	================
	
	This process is covered on Page 101 of the "Microsoft Macro Assembler 5.0:
	Programmer's Guide." The second paragraph states the following:
	
	  An AT segment typically contains no code or initialized data. Instead, it
	  represents an address template that can be placed over code or data already
	  in memory, such as a screen buffer or other absolute memory locations defined
	  by hardware. The linker will not generate any code or data for AT segments,
	  but existing code or data can be accessed by name if it is given a label in
	  an AT segment.
	
	Additional query words: 5.00 5.10 5.10a 6.00 6.00a 6.00b bios rom
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM600 kbMASM500 kbMASM600a kbMASM510a kbMASM600b
	Version           : :5.0,5.1,5.1a,6.0,6.0a,6.0b
	
	=============================================================================
	
