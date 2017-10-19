---
layout: page
title: "Q93594: BUG: No Warning Moving Segment Register to Extended Reg."
permalink: /kb/093/Q93594/
---

## Q93594: BUG: No Warning Moving Segment Register to Extended Reg.

	Article: Q93594
	Product(s): Microsoft Macro Assembler
	Version(s): 5.1a,6.0,6.0a,6.0b,6.1,6.11,6.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.1a, 6.0, 6.0a, 6.0b, 6.1, 6.1a, 6.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With the Microsoft Macro Assembler (MASM), an application can move data between
	one of the 16-bit segment registers and a 32-bit extended register. The
	assembler does not provide any error or warning message when an application
	makes such a move even though the high-order 16 bits of the 32-bit extended
	register are filled with a random value or are discarded in the move operation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM versions 5.1, 5.1a, 6.0,
	6.0a, 6.0b, 6.1, 6.1a, and 6.11. We are researching this problem and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Even though assembling the following code example should generate two assembler
	error or warning messages, it does not. The application runs; however, the EAX
	register is not restored to its original value as may be intended.
	
	Sample Code
	-----------
	
	  ; Assembler options needed: /c /W3
	
	  .MODEL small
	  .386
	  .STACK 4096
	
	  .CODE
	  start:
	      mov eax, 12345678h
	      mov es, eax    ; this should generate a warning or an error
	      mov eax, 87654321h
	      mov eax, es    ; this should generate a warning or an error
	      mov ax, 4C00h
	      int 21h
	  END start
	
	Additional query words: 5.10 5.10a 6.00 6.00a 6.00b 6.10 6.10a buglist6.00a buglist6.00b buglist6.10 buglist6.10a buglist6.11
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM610 kbMASM611 kbMASM610a kbMASM600a kbMASM510a kbMASM600b
	Version           : :5.1a,6.0,6.0a,6.0b,6.1,6.11,6.1a
	
	=============================================================================
	
