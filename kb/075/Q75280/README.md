---
layout: page
title: "Q75280: FIX: ALIGN or EVEN Cannot follow DUP in Same Module"
permalink: /kb/075/Q75280/
---

## Q75280: FIX: ALIGN or EVEN Cannot follow DUP in Same Module

{% raw %}

	Article: Q75280
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
	
	If an ALIGN or EVEN directive is used in a module after data has been defined
	with the DUP operator in the Microsoft Macro Assembler (MASM) version 6.0, the
	alignment value will be adjusted by one for each DUP that precedes it. The
	example code below illustrates this.
	
	RESOLUTION
	==========
	
	Currently, the only workarounds in this case are to either avoid using ALIGN (or
	EVEN) and manually pad the segment by the required amount or to not use the DUP
	operator in the same segment that will use the ALIGN (or EVEN) directive.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM version 6.0. This problem
	was corrected in MASM version 6.0a.
	
	MORE INFORMATION
	================
	
	The following sample code can be used to demonstrate the problem.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: /Fl /Sa
	
	  example segment para    public 'data'
	          db      2 dup (0)
	          db      3 dup (0)
	          align 8
	          dw      0             ; starts at offset 6 instead of 8
	  example ends
	  END
	
	Additional query words: 6.00 buglist6.00 fixlist6.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600
	Version           : MS-DOS:6.0
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
