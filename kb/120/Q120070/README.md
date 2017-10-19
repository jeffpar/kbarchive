---
layout: page
title: "Q120070: Using Immediate and Memory Operands"
permalink: /kb/120/Q120070/
---

## Q120070: Using Immediate and Memory Operands

	Article: Q120070
	Product(s): Microsoft Macro Assembler
	Version(s): 6.0,6.1,6.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.0, 6.1, 6.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An immediate operand is a constant value or expression. A direct memory operand
	refers to data at a given address. An indirect memory operand also refers to the
	contents of a given address, rather than the address itself, but the address is
	calculated at run time by referring to the contents of the specified register.
	
	Initially, it would appear that putting brackets ([]) around the operand makes it
	a memory operand. This article demonstrates how the assembler determines the
	addressing mode to use based on the operand type and the brackets, not just on
	the presence or absence of brackets.
	
	MORE INFORMATION
	================
	
	Case 1
	------
	
	In the following code fragment, both mov instructions move dataitem into the ax
	register.
	
	     .DATA
	     dataitem DW 0
	
	     .CODE
	     mov ax, dataitem
	     mov ax, [dataitem]
	
	The results are the same because the assembler determines the addressing mode
	based on the way that dataitem is declared. In both cases, dataitem is a label,
	so the assembler will access the data located at the label.
	
	If you really want to access dataitem as a constant value, use the following
	syntax:
	
	     .CODE
	     mov ax, OFFSET dataitem
	
	In this case, OFFSET tells the assembler to treat dataitem as a constant value
	rather than as a data item that is located at a memory location.
	
	Case 2
	------
	
	In the following code fragment, both mov instructions move 0 into the ax
	register.
	
	     datavalue EQU 0
	
	     .CODE
	     mov ax, datavalue
	     mov ax, [datavalue]
	
	Again, the result is the same, because the assembler determines the addressing
	mode based on the way datavalue is declared. In both cases, datavalue is an
	equate, so the assembler will treat datavalue as a constant value.
	
	If you want to access datavalue as a data item located at a memory location, use
	the following syntax:
	
	     .CODE
	     mov ax, ds:datavalue
	
	In this case, the segment override tells the assembler to treat datavalue as a
	data item that is located at ds:datavalue, rather than treating datavalue as a
	constant value.
	
	Case 3
	------
	
	On the other hand, with the following code fragment, the mov instructions have
	different results.
	
	     .CODE
	     mov ax, bx
	     mov ax, [bx]
	
	In the first case, we are moving what is in bx into ax. In the second case, we
	are using bx as an offset and moving what is at that offset into ax. The
	assembler determines what to do based on the brackets or lack of brackets around
	the register. This is the only case where the brackets have this effect.
	
	Additional query words: 6.00 6.10 6.11
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM610 kbMASM611
	Version           : :6.0,6.1,6.11
	
	=============================================================================
	
