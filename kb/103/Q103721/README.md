---
layout: page
title: "Q103721: FIX: Prefix Bytes Are Order-Dependent in CodeView 4.0x"
permalink: /kb/103/Q103721/
---

## Q103721: FIX: Prefix Bytes Are Order-Dependent in CodeView 4.0x

{% raw %}

	Article: Q103721
	Product(s): Microsoft Programming Utilities
	Version(s): 4.0,4.01
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS, versions 4.0, 4.01 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The disassembler, which is used to display mixed source and assembly or assembly
	in CodeView, is sensitive to the order in which the 66h and 67h prefix bytes
	occur in 32-bit instructions. If the order is 67h 66h, then the instruction is
	disassembled as:
	
	  67668B03 MOV AX,WORD PTR [EBX]
	
	CodeView incorrectly shows AX as the destination operand. However, if the order
	is 66h 67h, then the instruction is disassembled as:
	
	  66678B03 MOV EAX,DWORD PTR [EBX]
	
	In this case, CodeView correctly shows EAX. The MASM version 6.x program shown
	below demonstrates the problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in CodeView versions 4.0 and 4.01.
	The problem was corrected in CodeView version 4.1.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: /Zi
	
	  .MODEL small
	  .386
	
	  .STACK 4096
	
	  .CODE
	      .startup
	  loc1:
	      mov eax, [ebx]
	  loc2:
	      ORG loc1
	      DB 66h, 67h    ; This forces the prefix bytes to 66h 67h
	      ORG loc2
	  loc3:
	      mov eax, [ebx]
	  loc4:
	      ORG loc3
	      DB 67h, 66h    ; This forces the prefix bytes to 67h 66h
	      ORG loc4
	      .exit 0
	  END
	
	Additional query words: reverse 4.00
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3 kbCodeView400DOS kbCodeView401DOS
	Version           : :4.0,4.01
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
