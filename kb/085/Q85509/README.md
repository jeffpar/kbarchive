---
layout: page
title: "Q85509: FIX: ORG Calculated from Label May Fail in 6.0a/6.0b"
permalink: /kb/085/Q85509/
---

## Q85509: FIX: ORG Calculated from Label May Fail in 6.0a/6.0b

	Article: Q85509
	Product(s): Microsoft Macro Assembler
	Version(s): MS-DOS:6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Macro Assembler (MASM) versions 6.0a and 6.0b, if the expression
	for an ORG directive is calculated from a label, the ORG directive will not give
	the correct results. The origin set by the ORG directive will be off by the
	value of the current location counter ($) prior to the ORG directive.
	
	RESOLUTION
	==========
	
	The sample code below demonstrates a macro that can be used to correct the
	behavior of ORG. This macro should be used only if the expression being supplied
	to ORG was calculated using a label. If the expression being supplied to ORG was
	not calculated using any labels, the ORG directive should work correctly.
	
	This macro works correctly only under MASM versions 6.0a and 6.0b.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM versions 6.0a, and 6.0b.
	This problem was corrected in MASM for MS-DOS version 6.1.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	  ORGFIX MACRO arg1             ; This macro can be used
	     ORG (arg1- ($- @CurSeg))   ; whenever the origin you are
	  ENDM                          ; trying to set contains a LABEL
	                                ; or $ as part of the expression.
	  .MODEL small
	  .STACK 4096
	
	  .CODE
	  start LABEL BYTE
	     .startup
	     .exit 0
	  finish LABEL BYTE
	
	  ORG ((finish- start)+ 10h)    ; This will incorrectly set
	  tst1 LABEL BYTE               ; the origin.
	
	  ORGFIX ((finish- start)+ 10h) ; This will correctly set
	  tst2 LABEL BYTE               ; the origin.
	
	     DB 'hello'
	  END
	
	Additional query words: 6.00a 6.00b buglist6.00a buglist6.00b fixlist6.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600a kbMASM600b
	Version           : MS-DOS:6.0a,6.0b
	Solution Type     : kbfix
	
	=============================================================================
	
