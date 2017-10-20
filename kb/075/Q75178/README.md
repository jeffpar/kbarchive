---
layout: page
title: "Q75178: FIX: ASSUME Using SEG on Communal Far Data Item"
permalink: /kb/075/Q75178/
---

## Q75178: FIX: ASSUME Using SEG on Communal Far Data Item

{% raw %}

	Article: Q75178
	Product(s): Microsoft Macro Assembler
	Version(s): MS-DOS:5.10,5.10a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.10, 5.10a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the ASSUME directive uses the SEG operator on a communal far data item in
	the Microsoft Macro Assembler (MASM) versions 5.1, 5.1a, and 6.0, it may
	generate an error incorrectly. The statement "cmp dog, 0" in the sample code
	below incorrectly generates the following message when assembled with MASM 5.1
	or 5.1a:
	
	  A2068: Cannot address with segment register
	
	MASM 6.0 incorrectly generates the following message:
	
	  A2074: cannot access label through segment registers
	
	RESOLUTION
	==========
	
	The following workarounds may be used to eliminate the error messages:
	
	1. Use the segment name instead of the SEG operator on a label, such as "ASSUME
	  ds:FAR_DATA" instead of "ASSUME ds:SEG dog".
	
	2. Specify the segment register along with the label, such as "cmp ds:dog, 0"
	  instead of "cmp dog, 0".
	
	3. With MASM 6.0, specify that the communal data is far, such as "COMM FAR
	  dog:BYTE instead of "COMM dog:BYTE".
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM versions 5.1, 5.1a, and
	6.0. This problem was corrected in MASM version 6.0a.
	
	MORE INFORMATION
	================
	
	The following sample code can be used to demonstrate the problem.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	  .MODEL large, C
	
	  .FARDATA
	  COMM dog:BYTE
	
	  .CODE
	  cat PROC
	      ASSUME ds:SEG dog
	      mov ax, SEG dog
	      mov ds, ax
	      cmp dog, 0
	      ret
	  cat ENDP
	  END
	
	Additional query words: 5.10 5.10a 6.00 buglist5.10 buglist5.10a buglist6.00 fixlist6.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600
	Version           : MS-DOS:5.10,5.10a,6.0
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
