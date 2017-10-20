---
layout: page
title: "Q80116: FIX: Illegal Instruction from Structure Member Offset"
permalink: /kb/080/Q80116/
---

## Q80116: FIX: Illegal Instruction from Structure Member Offset

{% raw %}

	Article: Q80116
	Product(s): Microsoft Macro Assembler
	Version(s): 5.1,5.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.1, 5.1a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Microsoft Macro Assembler (MASM) versions 5.1 and 5.1a, if the offset of
	a structure template member is used as a 32-bit operand, the code generated may
	be incorrect. This will cause the program to hang or generate an illegal
	instruction message in CodeView.
	
	CAUSE
	=====
	
	The problem occurs when the offset of a structure template member is being used
	as a 32-bit immediate value, and the member's offset is greater than 100h. If
	the offset is greater than 100h, the code generated will not contain the 66h
	prefix byte, which makes the instruction a 32-bit operation.
	
	RESOLUTION
	==========
	
	Embed the 66h byte by using the DB directive, as shown in the example below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM version 5.1 and 5.1a. This
	problem was corrected in MASM version 6.0.
	
	MORE INFORMATION
	================
	
	The following sample code can be used to demonstrate the problem.
	
	Sample Code
	-----------
	
	  ;  Assemble options needed: none
	
	  .MODEL small
	  .386
	
	  strctr  STRUC
	       data1 DB 100h DUP (?)
	       data2 DB 100h DUP (?)
	  strctr  ENDS
	
	  .CODE
	  start:
	       mov esi, strctr.data1 ;This works since data1 < 100h.
	       ;DB 66h               ;Uncomment to fix next instruction.
	       mov esi, strctr.data2 ;This doesn't work since data2 > FFh.
	
	       add esi, strctr.data1 ;This works since data1 < 100h.
	       ;DB 66h               ;Uncomment to fix next instruction.
	       add esi, strctr.data2 ;This doesn't work since data2 > FFh.
	
	  END start
	
	Additional query words: 5.10 5.10a buglist5.10 buglist5.10a fixlist6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM510a
	Version           : :5.1,5.1a
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
