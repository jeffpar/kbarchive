---
layout: page
title: "Q69987: MASM Optimizations Not Recognized by Some Processors"
permalink: /kb/069/Q69987/
---

## Q69987: MASM Optimizations Not Recognized by Some Processors

{% raw %}

	Article: Q69987
	Product(s): Microsoft Macro Assembler
	Version(s): 5.1,5.1a,6.0,6.0a,6.0b,6.10,6.10a,6.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.1, 5.1a, 6.0, 6.0a, 6.0b, 6.10, 6.10a, 6.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	For optimization reasons, MASM may generate the opcode 83 for logical AND, OR,
	and XOR instructions in some cases, rather than opcode 81. Unfortunately, opcode
	83 was not documented by Intel for 80x86/8088 processors prior to the 80386.
	Therefore, some processors (such as the NEC V25 and V35 controllers) and some
	in-circuit emulators for the 80x86 family do not support this opcode.
	
	In the sample code below, "Listing 1" shows code that will cause the 83 opcode to
	be generated. "Listing 2" illustrates a way to work around this situation for
	those who are using processors that do not support this opcode and who are using
	versions of the assembler prior to 6.0. Note that opcode 83 does work properly
	on all Intel 80x86/8088 processors, and its generation is by design.
	
	The sign-extension optimization may be disabled in MASM 6.0 and later with the
	OPTION directive. To override the default sign-extended opcodes for AND, OR, and
	XOR, place the following line at the beginning of the source file:
	
	     OPTION NOSIGNEXTEND
	
	MORE INFORMATION
	================
	
	The opcode 83 takes advantage of the sign-extension feature available on the
	Intel 80x86 processors. If the high byte of a word has all bits set or all bits
	cleared, and the most significant bit of the low byte is in the same state as
	the bits in the high byte, then the word may be represented by one byte. The
	opcode 83 instructs the machine to build the word by taking the byte and
	extending the sign bit (most significant bit) of the byte into the rest of the
	word.
	
	For example, if the word is FFF0h, the word may be represented by F0h. By the
	same method, if the word is 000Fh, it may be stored as 0F.
	
	The work-around for MASM versions prior to 6.0 shown below works because pass one
	of the assembler does not know if the second operand will meet the above
	criteria, and will generate the opcode 81. Zero is defined as the number 0, so
	the operand value does not change.
	
	Sample Code
	-----------
	
	  ;Listing 1:
	
	  .MODEL small
	  .DATA
	  val DW 0
	
	  .CODE
	  mine PROC
	      and val, 0FFF0h
	  mine ENDP
	  END
	
	  ;Listing 2:
	
	  .MODEL small
	  .DATA
	  val DW 0
	
	  .CODE
	  mine PROC
	      and val, ZERO + 0FFF0h
	  mine ENDP
	
	  ZERO EQU 0
	  END
	
	Additional query words: kbinf 5.10 5.10a 6.00 6.00a 6.00b 6.10 6.10a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM600 kbMASM611 kbMASM600a kbMASM510a kbMASM600b
	Version           : :5.1,5.1a,6.0,6.0a,6.0b,6.10,6.10a,6.11
	
	=============================================================================
	

{% endraw %}
