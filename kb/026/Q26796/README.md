---
layout: page
title: "Q26796: FIX: &quot;Operand Expected&quot; Error Message"
permalink: /kb/026/Q26796/
---

## Q26796: FIX: &quot;Operand Expected&quot; Error Message

	Article: Q26796
	Product(s): Microsoft Macro Assembler
	Version(s): 5.0,5.1,5.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.0, 5.1, 5.1a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The expression 'PUSH DWORD PTR OFFSET alabel' causes the Microsoft Macro
	Assember (MASM) versions 5.0, 5.1, and 5.1a to generate the error message:
	
	  error A2027: Operand expected
	
	RESOLUTION
	==========
	
	The line 'PUSH DWORD PTR (OFFSET alabel)' works correctly. Since OFFSET is a
	unary operator, it should not require parentheses.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM versions 5.0, 5.1, and
	5.1a. This problem was corrected in MASM version 6.0.
	
	MORE INFORMATION
	================
	
	It is important to note that the operating system that your program is running
	on must be capable of supporting 32 bit code segments to be able to run code in
	32 bit segments. Most PC based operating systems such as MS-DOS 5.0, Windows
	3.0, and OS/2 1.x do not provide support for 32 bit code segments. Newer
	operating systems and DOS extender packages may provide this support.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	  .MODEL small
	  .386
	
	  .STACK 1024
	
	  seg32 SEGMENT USE32
	  a32label DW 4321h
	  seg32 ENDS
	
	  .CODE
	  start:
	    ;push DWORD PTR (OFFSET a32label) ;This is the MASM 5.0,
	                                      ;5.1, and 5.1a workaround
	    push DWORD PTR OFFSET a32label
	    mov ax, 4C00h
	    int 21h
	
	  END start
	
	Additional query words: 5.00 5.10 5.10a buglist5.00 buglist5.10 buglist5.10a fixlist6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM500 kbMASM510a
	Version           : :5.0,5.1,5.1a
	Solution Type     : kbfix
	
	=============================================================================
	
