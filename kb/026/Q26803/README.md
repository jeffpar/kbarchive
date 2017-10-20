---
layout: page
title: "Q26803: FIX: Incorrect Checksum"
permalink: /kb/026/Q26803/
---

## Q26803: FIX: Incorrect Checksum

{% raw %}

	Article: Q26803
	Product(s): Microsoft Macro Assembler
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Macro Assembler (MASM) version 5.0 may generate an incorrect checksum
	for one of the records in the generated object module.
	
	RESOLUTION
	==========
	
	If the starting address is removed from the END directive, the problem goes
	away.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM version 5.0. This problem
	was corrected in MASM version 5.1.
	
	MORE INFORMATION
	================
	
	The following sample code can be used to demonstrate the problem.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	  _TEXT SEGMENT PARA PUBLIC 'CODE'
	    ASSUME CS:_TEXT
	  start:
	    mov ax, 4C00h
	    int 21h
	  _TEXT ENDS
	
	  END start ; removing the label 'start' from the END directive
	            ; stops the incorrect checksum from being generated
	
	Additional query words: 5.00 buglist5.00 fixlist5.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM500
	Version           : :5.0
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
