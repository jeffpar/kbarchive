---
layout: page
title: "Q94911: BUG: ALIGN Directive Placement Changes EXE File Size"
permalink: /kb/094/Q94911/
---

## Q94911: BUG: ALIGN Directive Placement Changes EXE File Size

	Article: Q94911
	Product(s): Microsoft Macro Assembler
	Version(s): 6.1,6.11,6.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.1, 6.1a, 6.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In an application developed with the Microsoft Macro Assembler (MASM), placing
	the ALIGN directive before data in a _BSS segment increases the sizes of the
	object module and of the executable file.
	
	CAUSE
	=====
	
	When the ALIGN directive appears at the beginning of a segment, the assembler
	places the unitialized _BSS segment into the executable file.
	
	RESOLUTION
	==========
	
	To work around this problem, modify the source code to remove the ALIGN
	directive from the beginning of the segment. According to the design of the
	assembler, the ALIGN directive does not have any effect at the beginning of a
	segment. The first item of the segment is aligned according to the alignment
	parameter in the SEGMENT statement.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM versions 6.1, 6.1a, and
	6.11. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	  ; Assemble options needed: None
	
	  DOSSEG
	
	  _text SEGMENT para public 'CODE'
	  start:
	     nop
	  _text ENDS
	
	  _bss SEGMENT para public '_BSS'
	     align 4
	     dw ?
	  _bss ENDS
	
	  stk SEGMENT para stack 'STACK'
	     dw ?
	  stk ENDS
	
	  END start
	
	Additional query words: 6.10 6.10a 6.11 buglist6.10 buglist6.10a buglist6.11
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM610 kbMASM611 kbMASM610a
	Version           : :6.1,6.11,6.1a
	
	=============================================================================
	
