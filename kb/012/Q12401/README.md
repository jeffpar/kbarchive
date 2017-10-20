---
layout: page
title: "Q12401: PRB: Single Stepping IN to 8259A Controller Gives Wrong Result"
permalink: /kb/012/Q12401/
---

## Q12401: PRB: Single Stepping IN to 8259A Controller Gives Wrong Result

{% raw %}

	Article: Q12401
	Product(s): Microsoft Programming Utilities
	Version(s): 2.2,3.0,3.05,3.06,3.07,3.11,3.14,4.0,4.01,4.05,4.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS, versions 2.2, 3.0, 3.11, 3.14, 4.0, 4.01, 4.05, 4.1 
	- Microsoft CodeView for Windows, versions 3.0, 3.05, 3.06, 3.07, 4.0, 4.01, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	CodeView disables all interrupts at the interrupt controller when
	single-stepping an instruction. If you single-step an IN instruction that
	accesses an 8259A interrupt controller, the value returned will be 0xFF and not
	the true value you would expect.
	
	CAUSE
	=====
	
	This is a restriction imposed by the 8086 chip, which forces CodeView to disable
	interrupts when single-stepping.
	
	RESOLUTION
	==========
	
	The following are two of the simplest ways to work around this restriction:
	
	1. Issue G IP+1 or G IP+2, depending on whether the instruction is a one- or
	  two-byte IN instruction. This does not single-step the instruction; it sets a
	  temporary breakpoint at the next instruction and executes up to the
	  breakpoint, thus appearing as if you just single-stepped.
	
	-or-
	
	2. If you accidentally single-step the IN instruction, you can get the real
	  value of the interrupt controller by issuing I 0x21. This returns the value
	  of the port directly, so you can change the value in the AX register by
	  issuing RAX=value and continue single- stepping.
	
	Additional query words: 2.20 3.00 4.00 4.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3 kbCodeView220DOS kbCodeView300DOS kbCodeView311DOS kbCodeView314DOS kbCodeView400DOS kbCodeView401DOS kbCodeView405DOS kbCodeView410DOS kbCodeView300 kbCodeView305 kbCodeView306 kbCodeView307 kbCodeView400 kbCodeView401 kbCodeView410
	Version           : :2.2,3.0,3.05,3.06,3.07,3.11,3.14,4.0,4.01,4.05,4.1
	
	=============================================================================
	

{% endraw %}
