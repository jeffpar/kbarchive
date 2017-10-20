---
layout: page
title: "Q24965: Jump to Absolute Address"
permalink: /kb/024/Q24965/
---

## Q24965: Jump to Absolute Address

{% raw %}

	Article: Q24965
	Product(s): Microsoft Macro Assembler
	Version(s): 1.25,1.27,3.0x,4.0,5.0,5.1,5.1a,6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 1.25, 1.27, 3.0x, 4.0, 5.0, 5.1, 5.1a, 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are two methods of coding a jump to an absolute address. These methods are
	as follows:
	
	1. Use AT to create a segment template beginning at an absolute address. Then,
	  using ORG, a label can be assigned at a specific offset.
	
	-or-
	
	2. Initialize a double word variable to the specific address.
	
	MORE INFORMATION
	================
	
	The following code demonstrates both methods:
	
	  ; Assembly options needed: none
	
	  ASEG SEGMENT BYTE AT 0000H
	
	             ORG 100
	  far_label  LABEL FAR
	
	  ASEG       ENDS
	
	  DATA   SEGMENT WORD 'DATA'
	
	  FAR_VAR DW   100,0
	
	  DATA         ENDS
	
	  CODE   SEGMENT BYTE 'CODE'
	         ASSUME CS:CODE, DS:DATA
	
	  start: mov ax, data
	         mov ds, ax
	
	         JMP far_label          ;This is the first type of jump.
	
	         JMP DWORD PTR far_var  ;This is the second type of jump.
	  CODE   ENDS
	
	  END start
	
	Additional query words: 1.25 1.27 3.0x 4.00 5.00 5.10 5.10a 6.00 6.00a 6.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM600 kbMASM125 kbMASM127 kbMASM30xSearch kbMASM400 kbMASM500 kbMASM600a kbMASM510a kbMASM600b
	Version           : :1.25,1.27,3.0x,4.0,5.0,5.1,5.1a,6.0,6.0a,6.0b
	
	=============================================================================
	

{% endraw %}
