---
layout: page
title: "Q40452: FIX: A2006: Phase Error Using EQU in An IFNDEF Block"
permalink: /kb/040/Q40452/
---

## Q40452: FIX: A2006: Phase Error Using EQU in An IFNDEF Block

{% raw %}

	Article: Q40452
	Product(s): Microsoft Macro Assembler
	Version(s): MS-DOS:5.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 5.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using an equate in an ifndef block, the following error is generated
	
	  A2006: phase error between passes
	
	CAUSE
	=====
	
	On pass 1 if the symbol is not defined, it gets defined. On pass 2 it is
	defined; therefore, you get a phase error.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM versions 5.0, 5.1, and
	5.1a. The problem was corrected in MASM version 6.0.
	
	RESOLUTION
	==========
	
	When using the equate, specify a size (with WORD PTR, for example).
	
	MORE INFORMATION
	================
	
	The following sample code demonstrates the problem. In order to work around the
	problem change
	
	     MOV bx, SAVE
	
	to the following
	
	     MOV bx, WORD PTR SAVE
	
	Sample Code:
	------------
	
	  ;Assemble options needed: none
	
	  ifndef SAVE
	     SAVE EQU 1
	  endif
	
	  code SEGMENT
	     assume cs:code
	
	     MOV bx, SAVE
	
	  endcode:
	
	  code ENDS
	      END
	
	Additional query words: 5.10 buglist5.00 buglist5.10 buglist5.10a fixlist6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510
	Version           : MS-DOS:5.1
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
