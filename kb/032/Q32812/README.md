---
layout: page
title: "Q32812: FIX: A4001 May Be Caused By a Literal '&gt;' in Text Equate"
permalink: kb/032/Q32812/
---

## Q32812: FIX: A4001 May Be Caused By a Literal '&gt;' in Text Equate

	Article: Q32812
	Product(s): Microsoft Macro Assembler
	Version(s): 5.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 5.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The literal character operator (!) does not allow a right angle bracket to be
	placed in a text equate. For example, the following line will cause the
	Microsoft Macro Assembler (MASM) versions 5.10 and 5.10a to generate a warning:
	
	     a   EQU    < !> >
	
	The warning produced is
	
	  A4001: Extra characters on line
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM version 5.1. This problem
	was corrected in MASM version 6.0.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	  .model small
	  .data
	
	  a   EQU  < !> >
	
	      END
	
	Additional query words: 5.10 buglist5.10 fixlist6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510
	Version           : :5.1
	Solution Type     : kbfix
	
	=============================================================================
	
