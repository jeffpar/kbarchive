---
layout: page
title: "Q35882: FIX: A5114: Operand Size Does Not Match Segment Word Size"
permalink: kb/035/Q35882/
---

## Q35882: FIX: A5114: Operand Size Does Not Match Segment Word Size

	Article: Q35882
	Product(s): Microsoft Macro Assembler
	Version(s): 5.0,5.1,5.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.0, 5.1, 5.1a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Macro Assembler (MASM) versions 5.0, 5.1, and 5.1a may generate
	the warning:
	
	  A5114: Operand size does not match segment word size
	
	when using 32-bit operands in USE16 segments. The warning is only generated on
	push and pop instructions using an operand with the size other than the size of
	the segment. For example, using DWORD push in a USE16 segment or using a WORD
	push in a USE32 segment. The warning is not generated for any other use of
	32-bit operands.
	
	CAUSE
	=====
	
	The warning message may have been added to aid the programmer trying to convert
	code from 16-bit segments to 32-bit segments. The warning message should only
	occur in 32-bit segments when 16-bit push/pop operands are given, and not in the
	converse situation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM versions 5.0, 5.1, 5.1a.
	This problem was corrected in MASM version 6.0.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	  ; Assemble options needed: /W2
	
	  .386
	
	  _TEXT16 SEGMENT WORD PUBLIC USE16 'CODE'
	  ASSUME cs:_TEXT16
	
	  start:
	      push eax
	      pop eax
	      mov ax, 4C00h
	      int 21h
	  _TEXT16 ENDS
	
	  _TEXT32 SEGMENT WORD PUBLIC USE32 'CODE'
	  ASSUME cs:_TEXT32
	      push ax
	      pop ax
	      mov ax, 4C00h
	      int 21h
	  _TEXT32 ENDS
	
	  END start
	
	Additional query words: 5.00 5.10 5.10a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM500 kbMASM510a
	Version           : :5.0,5.1,5.1a
	Solution Type     : kbfix
	
	=============================================================================
	
