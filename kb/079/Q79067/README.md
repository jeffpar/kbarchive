---
layout: page
title: "Q79067: FIX: A2029 Incorrectly Generated If Operand = [ebx][ebx]"
permalink: kb/079/Q79067/
---

## Q79067: FIX: A2029 Incorrectly Generated If Operand = [ebx][ebx]

	Article: Q79067
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
	
	With the Microsoft Macro Assembler (MASM) 6.0, the following error is generated
	incorrectly for instructions using the operand [ebx][ebx]:
	
	  error A2029 : multiple base registers not allowed
	
	For example:
	
	  lea esi, [ebx][ebx]
	  mov esi, [ebx][ebx]
	
	RESOLUTION
	==========
	
	A workaround for this problem is to embed the opcode for the instruction
	directly in the code. The sample code below demonstrates this method.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM version 6.0. This problem
	has been corrected in MASM version 6.0a.
	
	MORE INFORMATION
	================
	
	Error A2029 will be incorrectly generated for the following program. The code
	that should be generated for lea esi [ebx][ebx] is 8D 34 1B. Note that the
	operand [ebx][ebx] is available only when using the .386 or .486 directives.
	
	Sample Code
	-----------
	
	  ; Assembler options needed none
	
	  .386
	  .MODEL flat
	  .STACK 4096
	
	  CODE32 SEGMENT PUBLIC USE32
	   main PROC near
	      lea esi, [ebx][ebx]      ; Replace this by BYTE 8Dh, 34h, 1Bh
	      ret
	  main ENDP
	  CODE32 ENDS
	
	  END
	
	Additional query words: 6.00 buglist6.00 fixlist6.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600
	Version           : :6.0
	Solution Type     : kbfix
	
	=============================================================================
	
