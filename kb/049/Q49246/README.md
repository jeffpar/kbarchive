---
layout: page
title: "Q49246: Using OFFSET with a Group of Data Segments"
permalink: /kb/049/Q49246/
---

## Q49246: Using OFFSET with a Group of Data Segments

{% raw %}

	Article: Q49246
	Product(s): Microsoft Macro Assembler
	Version(s): 5.0,5.1,5.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.1, 5.1a 
	- Microsoft Macro Assembler (MASM), version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using the OFFSET directive to refer to a variable defined in a SEGMENT that
	is part of a GROUP, the offset generated is from the beginning of the SEGMENT if
	full segment declarations are used. Normally when using the OFFSET directive,
	the offset generated is from the beginning of the GROUP when simplified segment
	declarations are used.
	
	This behavior occurs in Microsoft Macro Assembler (MASM) versions 5.0, 5.1, and
	5.1a and in QuickAssembler versions 2.01 and 2.51. Starting with MASM 6.0 you
	can use the OPTION OFFSET directive to control whether the offset generated is
	from the beginning of the SEGMENT or from the beginning of the GROUP.
	
	MORE INFORMATION
	================
	
	The code below will demonstrate this behavior. The OFFSET directive generates an
	offset relative to the beginning of the SEGMENT instead of the beginning of the
	GROUP. When a segment override is used to specify the segment to take the
	address relative to, the expected offset is generated. Also, the LEA instruction
	generates the offset relative to the segment the DS register is assumed to.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	  dgroup GROUP data1,data2
	
	  data1 SEGMENT PARA PUBLIC 'DATA'
	  var1 DW 12 DUP (1)
	  data1 ENDS
	
	  data2 SEGMENT PARA PUBLIC 'DATA'
	  var2 DW 0
	  data2 ENDS
	
	  code SEGMENT PARA PUBLIC 'CODE'
	  ASSUME cs:code,ds:dgroup
	  start:
	      mov bx, OFFSET var2        ; <--offset relative to segment
	      mov bx, OFFSET dgroup:var2 ; <--offset relative to dgroup
	      lea bx, var2               ; <--offset relative to ds
	      mov ax, 4C00h
	      int 21h
	  code ENDS
	
	  END start
	
	Additional query words: kbinf 5.00 5.10 5.10a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM500 kbMASM510a
	Version           : :5.0,5.1,5.1a
	
	=============================================================================
	

{% endraw %}
