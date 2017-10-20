---
layout: page
title: "Q39372: DOCERR: MOV mem,accum and MOV accum,mem Formats Documented Wrong"
permalink: /kb/039/Q39372/
---

## Q39372: DOCERR: MOV mem,accum and MOV accum,mem Formats Documented Wrong

{% raw %}

	Article: Q39372
	Product(s): Microsoft Macro Assembler
	Version(s): 5.0,5.1,5.1a,6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.0, 5.1, 5.1a, 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There is a documentation error on page 77 of the "Microsoft Macro Assembler 5.1
	Reference" and page 112 of the "Microsoft Macro Assember Reference" that comes
	with MASM 6.0, 6.0a, and 6.0b. The encodings given for the following forms of
	the MOV instruction are incorrectly documented
	
	  MOV mem, accum
	  MOV accum, mem
	
	The manual describes the format of these instructions as 101000dw on those pages.
	The section describing the encodings (p. 27 for MASM 5.1 and p. 59 for MASM 6.0,
	6.0a, 6.0b) says that a value of 1 for d (the direction flag) means that the
	move goes from memory to register and a 0 for d means to move from the register
	to memory. This results in an incorrect encoding for these forms of the MOV
	instruction.
	
	MORE INFORMATION
	================
	
	Page 3-118 of "Intel's iAPX 86/88, 186/188 User's Manual (Programmer's
	Reference)" provides the correct information.
	
	  MOV mem, accum     should be  1010001w
	  MOV accum, mem     should be  1010000w
	
	The assember encodes these instructions using the general case
	
	  MOV mem, reg
	  MOV accum, mem
	
	rather than specifically using the special forms for the accumulator. The
	following is an example of how to encode the forms that use the accumulator by
	hand.
	
	Sample Code
	-----------
	
	  ;Assemble options needed: none
	
	               .model small
	
	               .data
	  myoffset     dw      23
	
	               .code
	
	  start:       MOV     ax, @data
	               MOV     ds, ax
	
	  memaccum     db      0a1h
	               dw      offset myoffset
	
	  accummem     db      0a3h
	               dw      offset myoffset
	
	               MOV     ah, 4ch
	               INT     21h
	
	               END     start
	
	Additional query words: 5.00 5.10 5.10a 6.00 6.00a 6.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM600 kbMASM500 kbMASM600a kbMASM510a kbMASM600b
	Version           : :5.0,5.1,5.1a,6.0,6.0a,6.0b
	
	=============================================================================
	

{% endraw %}
