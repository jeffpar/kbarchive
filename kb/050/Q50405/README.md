---
layout: page
title: "Q50405: Specifying the Size of a CALL or JMP Instruction in MASM"
permalink: kb/050/Q50405/
---

## Q50405: Specifying the Size of a CALL or JMP Instruction in MASM

	Article: Q50405
	Product(s): Microsoft Macro Assembler
	Version(s): 5.0,5.1,5.1a,6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.0, 5.1, 5.1a, 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The PTR operator can be used to specify the size of a register indirect operand
	for a CALL or JMP instruction. However, the qualifying operators are not NEAR
	and FAR, but WORD and DWORD. For example, to make a near jump to label xxx, use
	
	     JMP WORD PTR xxx
	
	MORE INFORMATION
	================
	
	The following example demonstrates how to generate an indirect far call and an
	indirect far jump in MASM.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	            .model  large
	            .data
	  jumptable DD      routine1
	            DD      routine2
	
	            .code
	  start:    MOV     ax, @data
	            MOV     ds, ax
	            CALL    DWORD PTR  jumptable
	            JMP     DWORD PTR  jumptable+4
	            RET
	
	  cseg      SEGMENT word public 'code'
	  routine1  PROC
	            RET
	  routine1  ENDP
	
	  routine2  PROC
	            RET
	  routine2  ENDP
	  cseg      ENDS
	
	            END     start
	
	Additional query words: kbinf 5.10 5.10a 6.00 6.00a 6.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM600 kbMASM500 kbMASM600a kbMASM510a kbMASM600b
	Version           : :5.0,5.1,5.1a,6.0,6.0a,6.0b
	
	=============================================================================
	
