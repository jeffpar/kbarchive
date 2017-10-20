---
layout: page
title: "Q73684: FIX: MASM 6.0 May Initialize Every 256th Data Symbol"
permalink: /kb/073/Q73684/
---

## Q73684: FIX: MASM 6.0 May Initialize Every 256th Data Symbol

{% raw %}

	Article: Q73684
	Product(s): Microsoft Macro Assembler
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Macro Assembler (MASM) version 6.0 may incorrectly initialize data
	that is intended to be uninitialized. The problem will occur with every 256th
	data symbol in a module that is defined using the "dup" operator.
	
	RESOLUTION
	==========
	
	To work around the problem, either avoid using the dup operator when declaring a
	variable or limit the number of occurrences to less than 256 per module.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM version 6.0. This problem
	was corrected in MASM version 6.0a.
	
	MORE INFORMATION
	================
	
	Uninitialized data is created by specifying the ? (question mark) symbol as a
	value at declaration time. It is primarily used to indicate that the initial
	value of a data symbol is unimportant. It can also be used to indicate that a
	symbol is actually defined in a separate compilation module and merely serves as
	a place holder for this module.
	
	If a segment contains only uninitialized data, the linker can reduce the size of
	the resultant .EXE file by modifying the minalloc field in the header by the
	corresponding amount. The loader will then allocate the space at run-time and
	fix the addresses as required. Because the assembler incorrectly initializes
	some data, the segment will not be completely uninitialized; therefore, LINK
	copies the segment in its entirety into the .EXE file and the resulting disk
	file is larger than necessary.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	  mymac    MACRO
	           LOCAL   ldat
	  ldat     DD      1      dup (?)
	           ENDM
	
	  data     SEGMENT
	
	  REPEAT   512
	           mymac
	           ENDM
	
	  data     ENDS
	  END
	
	Additional query words: 6.00 buglist6.00 fixlist6.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600
	Version           : MS-DOS:6.0
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
