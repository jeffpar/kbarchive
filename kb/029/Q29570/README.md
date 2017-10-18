---
layout: page
title: "Q29570: PRB: Error &quot;constant expected&quot; with ORG Directive"
permalink: kb/029/Q29570/
---

## Q29570: PRB: Error &quot;constant expected&quot; with ORG Directive

	Article: Q29570
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
	
	The statement 'ORG $+1' assembles without error, but the statements 'ORG $*2'
	and 'ORG $/2' produce an error. Under MASM 5.0, 5.1, and 5.1a the error message
	is:
	
	  error A2042: Constant expected
	
	Under MASM 6.0, 6.0a, and 6.0b the error message is:
	
	  error A2026: constant expected
	
	CAUSE
	=====
	
	The location counter ($) has the same attributes as a near label. Thus, MASM
	emits an offset relative to the start of the current segment.
	
	The linker must add the base address of the segment to do the fixup. When you use
	$+1, MASM emits an offset equal to one more than the current value of $. When
	you use $-1, MASM emits an offset equal to one less than the current value of
	$.
	
	When the linker adds the segment base address, the desired value is obtained.
	Because the linker only adds the segment base address, there is no way to do
	multiplicatiion or division; only addition and subtraction can be performed.
	Since the Linker cannot multiply and divide, these operations cannot be applied
	to symbols that are relocatable.
	
	RESOLUTION
	==========
	
	This is the expected behavior of MASM.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	  .MODEL small
	
	  .CODE
	  start:
	      mov ax,4C00h
	      int 21h
	  ORG $/2
	  END start
	
	Additional query words: 5.00 5.10 5.10a 6.00 6.00a 6.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM600 kbMASM500 kbMASM600a kbMASM510a kbMASM600b
	Version           : :5.0,5.1,5.1a,6.0,6.0a,6.0b
	
	=============================================================================
	
