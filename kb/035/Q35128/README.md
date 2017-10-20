---
layout: page
title: "Q35128: PRB: Line Parsing Order: Looks Up Second Token First"
permalink: /kb/035/Q35128/
---

## Q35128: PRB: Line Parsing Order: Looks Up Second Token First

{% raw %}

	Article: Q35128
	Product(s): Microsoft Macro Assembler
	Version(s): 5.1,5.1a,6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.1, 5.1a, 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The example below will generate the warning:
	
	  warning A4016: Reserved word used as symbol: MOV
	
	when assembled with Microsoft Macro Assembler (MASM) 5.1 and 5.1a. This warning
	is misleading. MASM 6.0, 6.0a, and 6.0b generate the more specific error
	message:
	
	  error A2001: immediate operand not allowed
	
	CAUSE
	=====
	
	The reference to a_struc.a in the example below is a reference to a structure
	template and not to a variable stored in memory. Thus, a_struc.a is a constant
	or immediate operand. MASM 5.1 and 5.1a always looks up the second token on the
	line first. In the case below, it sees "a_struc". Because a_struc is a structure
	declaration, MASM assumes the line declares a structure instance with "MOV"
	being the label. At this point, MASM errors on trying to use reserved symbol
	"MOV" as a structure instance label.
	
	RESOLUTION
	==========
	
	This is the expected behavior of MASM.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	  a_struc STRUC
	      a DW ?
	  a_struc ENDS
	
	  _TEXT SEGMENT 'CODE'
	  ASSUME CS:_TEXT
	  start:
	      mov a_struc.a, ax
	      mov ax, 4C00h
	      int 21h
	  _TEXT ENDS
	
	  END start
	
	Additional query words: 5.10 5.10a 6.00 6.00a 6.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM600 kbMASM600a kbMASM510a kbMASM600b
	Version           : :5.1,5.1a,6.0,6.0a,6.0b
	
	=============================================================================
	

{% endraw %}
