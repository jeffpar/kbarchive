---
layout: page
title: "Q68945: FIX: DWORD Local Variables Use Wrong Offset in MASM"
permalink: /kb/068/Q68945/
---

## Q68945: FIX: DWORD Local Variables Use Wrong Offset in MASM

{% raw %}

	Article: Q68945
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
	
	When using the LOCAL directive in the Microsoft Macro Assembler (MASM) version
	5.1 to declare stack space for a DWORD variable, the offset that is generated
	for the variable is [BP-2]. This may result in the saved value of the BP
	register to be overwritten when a value is stored in the DWORD local variable.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM version 5.1. This problem
	was corrected in version 5.1a.
	
	MORE INFORMATION
	================
	
	Beginning with MASM 5.10, if the optional language parameter is used with the
	.MODEL directive, the LOCAL directive may be used to declare local variables for
	a procedure (PROC). When the LOCAL directive is used in a procedure, stack space
	is set aside for the number and size of the local variables that were declared.
	For example, upon executing the first line of the sample assembly routine below,
	the stack frame appears as follows if assembled with MASM 5.10:
	
	     ------------
	     | Return   | 2 bytes
	     | address  |
	     ------------
	     | Stored   | 2 bytes
	     |   BP     |
	     ------------
	     | storage  | 2 bytes
	
	SP--> | for myvar|
	     ------------
	
	The problem is that DWORD needs four bytes of storage. Because the "saved BP" is
	at a higher memory location than the storage of myvar, myvar "overflows" into
	the saved BP area. Using MASM 5.1a will solve the problem by properly allocating
	4 bytes of storage for a DWORD.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	  .MODEL SMALL, C
	
	  PUBLIC C myproc
	
	  .CODE
	  myproc PROC
	      LOCAL myvar:DWORD
	      nop
	      ret
	  myproc ENDP
	
	  END
	
	Additional query words: 5.10 buglist5.10 fixlist5.10a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510
	Version           : :5.1
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
