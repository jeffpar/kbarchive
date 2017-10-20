---
layout: page
title: "Q78393: FIX: MASM 6.0 Always Uses EAX Register with BSWAP"
permalink: /kb/078/Q78393/
---

## Q78393: FIX: MASM 6.0 Always Uses EAX Register with BSWAP

{% raw %}

	Article: Q78393
	Product(s): Microsoft Macro Assembler
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Macro Assembler (MASM) version 6.0 always generates code that uses
	the EAX register with the BSWAP instruction.
	
	Attempting to use another register with the BSWAP instruction assembles without
	error; however, the code generated uses the EAX register.
	
	RESOLUTION
	==========
	
	A workaround for this problem is to embed the opcode (operation code) for the
	instruction directly in the code. The sample code below demonstrates this
	method.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM version 6.0. This problem
	was corrected in MASM version 6.0a.
	
	MORE INFORMATION
	================
	
	The following sample code can be used to demonstrate the problem.
	
	Sample Code
	-----------
	
	  ; Assemble options needed : none
	
	  .MODEL small
	  .486
	
	  .STACK 4096
	
	  .CODE
	  start:
	      bswap   eax            ; Code generated: 66| 0F C8 (bswap eax)
	
	      bswap   ebx            ; Code generated: 66| 0F C8 (bswap eax)
	      BYTE    66h            ; Embed a bswap ebx in the code
	      WORD    0CB0Fh
	
	      bswap   ecx            ; Code generated: 66| 0F C8 (bswap eax)
	      BYTE    66h            ; Embed a bswap ecx in the code
	      WORD    0C90Fh
	
	      bswap   edx            ; Code generated: 66| 0F C8 (bswap eax)
	      BYTE    66h            ; Embed a bswap edx in the code
	      WORD    0CA0Fh
	  END start
	
	Additional query words: 6.00 buglist6.00 fixlist6.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600
	Version           : MS-DOS:6.0
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
