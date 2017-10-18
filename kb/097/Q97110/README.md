---
layout: page
title: "Q97110: BUG: SIB MOV EAX,[EAX+EBP] Generates Incorrect Code"
permalink: kb/097/Q97110/
---

## Q97110: BUG: SIB MOV EAX,[EAX+EBP] Generates Incorrect Code

	Article: Q97110
	Product(s): Microsoft Macro Assembler
	Version(s): 6.0,6.0a,6.0b,6.1,6.11,6.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.0, 6.0a, 6.0b, 6.1, 6.1a, 6.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to use scaled index base (SIB) indirect operands may fail. If EBP is
	used and the stack and data segments do not have the same base address, the
	generated code executes incorrectly. In addition, if EBP is used as the index
	register, it is coded as the base register, which generates an additional byte
	in the instruction encoding.
	
	CAUSE
	=====
	
	When the code does not use a scaling factor, the Microsoft Macro Assembler
	(MASM) may reverse the base and index registers. When this occurs, MASM
	incorrectly treats the first register as the index and the second register as
	the base in an SIB indirect operand.
	
	If the code uses EBP or ESP as the base register, the indirect operand should
	access memory through the stack segment. When the code uses any other register
	as the base register, the indirect operand should access memory through the data
	segment. Because the assembler reverses the base and index registers, it uses
	the index register to determine the segment through which to access memory.
	However, the ESP register can be used only as a base register. Therefore, the
	problem occurs only when the code uses the EBP register.
	
	RESOLUTION
	==========
	
	To work around this problem, use a scaling factor to explicitly indicate which
	register is the index register. The sample below demonstrates this procedure.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM versions 6.0, 6.0a, 6.0b,
	6.1, 6.1a, and 6.11. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	When the code does not use a scaling factor, MASM should treat the first
	register as the base and the second register as the index in an SIB indirect
	operand. Note that the code must use the .386 or .486 directives to use an SIB
	indirect operand. One of these directives must be present to demonstrate the
	problem above.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: /Zi
	  ; Use Codeview to see the instructions generates by the assembler.
	
	  .MODEL small, C
	  .386                      ; .386 must be used to show the problem
	  .STACK 4096
	
	  .DATA
	
	  .CODE
	      .startup
	      mov eax, [ebp+edi]    ;Incorrect
	                            ;MOV AX,WORD PTR DS:[EDI+EBP]
	      mov eax, [esi+ebp]    ;Incorrect
	                            ;MOV AX,WORD PTR SS:[EBP+ESI]
	      mov eax, [ebp][edi]   ;Incorrect
	                            ;MOV AX,WORD PTR DS:[EDI+EBP]
	      mov eax, [esi][ebp]   ;Incorrect
	                            ;MOV AX,WORD PTR SS:[EBP+ESI]
	      mov eax, [ebp+1*edi]  ;Correct
	                            ;MOV AX,WORD PTR SS:[EBP+EDI]
	      mov eax, [esi+1*ebp]  ;Correct
	                            ;MOV AX,WORD PTR DS:[ESI+EBP]
	      .exit 0
	  END
	
	Additional query words: 6.00 6.00a 6.00b 6.10 6.10a indirection 32-bit buglist6.00a buglist6.00b buglist6.10 buglist6.10a buglist6.11
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM610 kbMASM611 kbMASM610a kbMASM600a kbMASM600b
	Version           : :6.0,6.0a,6.0b,6.1,6.11,6.1a
	
	=============================================================================
	
