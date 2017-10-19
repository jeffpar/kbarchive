---
layout: page
title: "Q79151: FIX: MASM 6.0 May Incorrectly Insert Prologue with USES"
permalink: /kb/079/Q79151/
---

## Q79151: FIX: MASM 6.0 May Incorrectly Insert Prologue with USES

	Article: Q79151
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
	
	In the Microsoft Macro Assembler (MASM) version 6.0, if a procedure header that
	contains the "USES" keyword is directly followed by a data segment definition,
	MASM may insert the prologue code inside the new data segment.
	
	RESOLUTION
	==========
	
	To work around the problem, merely place a code label directly after the
	procedure header as demonstrated in the sample code below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM version 6.0. This problem
	was corrected in MASM version 6.0a.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: /c /Fl /Sg
	
	  .MODEL small, c
	  .DATE
	          db "1234567890"
	
	  .CODE
	  alpha PROC uses ax bx   ; Problem with these parameters.
	  ;dummy:                 ; Uncomment this line for workaround.
	
	  .DATE
	  table   dw 1234h
	          dw 5678h
	  LEN EQU ($ - table)/2
	
	  .CODE
	      mov ax, LEN
	      ret
	  alpha ENDP
	  END
	
	Additional query words: 6.00 buglist6.00 fixlist6.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600
	Version           : :6.0
	Solution Type     : kbfix
	
	=============================================================================
	
