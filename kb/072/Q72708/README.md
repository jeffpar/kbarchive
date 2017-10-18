---
layout: page
title: "Q72708: FIX: MASM 6.0 May Generate Incorrect Code for IMUL Instruction"
permalink: kb/072/Q72708/
---

## Q72708: FIX: MASM 6.0 May Generate Incorrect Code for IMUL Instruction

	Article: Q72708
	Product(s): Microsoft Macro Assembler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Macro Assembler (MASM) version 6.0 will generate incorrect code
	when the IMUL instruction contains an operand that is a constant value from 128
	to 255. No errors or warnings are displayed while assembling.
	
	CAUSE
	=====
	
	The assembler incorrectly treats the constant as an 8-bit signed value rather
	than a signed word. In converting from a signed byte to a signed word, it
	extends the sign bit through the upper byte. Thus, 255 (0ffh) becomes -1
	(0ffffh).
	
	RESOLUTION
	==========
	
	To work around this problem, qualify the constant as a word. For example:
	
	     IMUL di,WORD PTR 255          ; This works.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM version 6.0. This problem
	was corrected in MASM version 6.0a.
	
	MORE INFORMATION
	================
	
	The sample code below demonstrates this problem. The result of the IMUL
	instruction is -1.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	  .MODEL small
	  .286
	
	  .CODE
	  main PROC
	      mov di, 1
	
	      imul di, 255
	  ;   imul di, WORD PTR 255 ; <--- This works.
	
	      mov ax, 4C00h
	      int 21h
	  main ENDP
	  END main
	
	Additional query words: 6.00 buglist6.00 fixlist6.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600
	Version           : :6.0
	Solution Type     : kbfix
	
	=============================================================================
	
