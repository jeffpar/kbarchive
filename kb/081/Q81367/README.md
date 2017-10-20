---
layout: page
title: "Q81367: FIX: EVEN, ALIGN Generate Error in AT Segments"
permalink: /kb/081/Q81367/
---

## Q81367: FIX: EVEN, ALIGN Generate Error in AT Segments

{% raw %}

	Article: Q81367
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
	
	The Microsoft Macro Assembler (MASM) version 6.0 incorrectly generates the
	following error when an EVEN or ALIGN statement is used in a segment that has an
	"AT" combine type:
	
	  error A2189: invalid combination with segment alignment : X
	
	X is equal to 2 for EVEN directives, and equal to the alignment of the ALIGN
	directive. MASM version 5.1 does not generate this error.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM version 6.0. This problem
	was corrected in MASM version 6.0a.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	  ;Hello.asm - This program writes "Hello world." in red at the top of
	  ;            screen.
	
	  .MODEL small
	
	  .STACK 4096
	
	  .DATA
	  msg    DB 'H', 0Ch, 'e', 0Ch, 'l', 0Ch, 'l', 0Ch, 'o', 0Ch, ' ', 0Ch
	         DB 'w', 0Ch, 'o', 0Ch, 'r', 0Ch, 'l', 0Ch, 'd', 0Ch, '.', 0Ch
	
	  _bad   SEGMENT PARA AT 0B800H
	         ORG 160
	         ALIGN 2            ; This line generates the A2189 error.
	  Line2  LABEL   WORD
	  _bad   ENDS
	
	  .CODE
	  start: mov ax, @data
	         mov ds, ax
	
	         mov ax, SEG Line2
	         mov es, ax
	
	         mov di, OFFSET Line2
	         mov si, OFFSET msg
	
	         mov cx, 0Ch
	
	         rep movsw
	
	         mov ax, 4C00h
	         int 21h
	
	  END start
	
	Additional query words: 6.00 5.10 buglist6.00 fixlist6.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600
	Version           : :6.0
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
