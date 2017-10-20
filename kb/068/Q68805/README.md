---
layout: page
title: "Q68805: How to Reboot Your Machine Within a MASM Application"
permalink: /kb/068/Q68805/
---

## Q68805: How to Reboot Your Machine Within a MASM Application

{% raw %}

	Article: Q68805
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
	
	You can perform a complete reboot (cold boot) on an 8086-based machine by
	jumping to the address FFFF:0000. This action also reboots many 80286 and 80386
	machines. The address contains a jump instruction that leads to the machine's
	initialization code. For this method to succeed, your machine must be in
	real-mode operation.
	
	MORE INFORMATION
	================
	
	To prevent a memory check on IBM and many compatibles (warm boot), you should
	store the value 0 x 1234 in the memory location at 0040:0072. On 100-percent IBM
	BIOS compatible machines, an alternative method is to call int 19h instead of
	jumping to the address mentioned above.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	  .MODEL small
	
	  .CODE
	
	  Start:
	      mov ax, @data                 ; Load ds with data segment
	      mov ds, ax
	
	      mov ax, 40h                   ; These three lines cause a memory
	      mov es, ax                    ; test NOT to be performed. To
	      mov WORD PTR es:[72h], 1234h  ; do a memory test, remove them.
	
	      jmp DWORD PTR b_vec           ; Jump to the reboot address
	
	  .DATA
	  b_vec   DW 00000h                 ; Offset of reboot vector
	          DW 0FFFFh                 ; Segment of reboot vector
	
	  .STACK
	
	  END Start
	
	Additional query words: 5.10 5.10a 6.00 6.00a 6.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM600 kbMASM500 kbMASM600a kbMASM510a kbMASM600b
	Version           : :5.0,5.1,5.1a,6.0,6.0a,6.0b
	
	=============================================================================
	

{% endraw %}
