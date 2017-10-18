---
layout: page
title: "Q80119: FIX: ALIGN Immediately After INCLUDE Generates L1101"
permalink: kb/080/Q80119/
---

## Q80119: FIX: ALIGN Immediately After INCLUDE Generates L1101

	Article: Q80119
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
	
	The Microsoft Macro Assembler (MASM) version 6.0 generates an invalid object
	module when given code that contains an INCLUDE directive followed immediately
	by an ALIGN directive. The contents of the included file are not important; it
	can even be an empty file. The linker may not issue a warning. If the linker
	does detect the error, it generates the following:
	
	  error L1101: invalid object module
	
	RESOLUTION
	==========
	
	To work around this problem, place the INCLUDE directive at the beginning of the
	file so that the ALIGN directive does not immediately follow the INCLUDE
	directive.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM version 6.0. This problem
	was corrected in MASM version 6.0a.
	
	MORE INFORMATION
	================
	
	If you assemble the following sample code with /Zi, the linker will detect the
	invalid object module and issue the error message. Without /Zi, no warning is
	given and the program terminates normally, but the object module is still
	invalid.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	  ; The file FILE.INC needs to be created, but may be left empty.
	
	  _text   SEGMENT para public 'code'
	          ASSUME  CS:_text
	
	  start:  mov cx, 0100h
	  INCLUDE FILE.INC
	          ALIGN 4
	  loopx:  mov ax, 4C00h
	          int 21h
	
	  _text   ENDS
	
	  END     start
	
	Additional query words: 6.00 buglist6.00 fixlist6.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600
	Version           : :6.0
	Solution Type     : kbfix
	
	=============================================================================
	
