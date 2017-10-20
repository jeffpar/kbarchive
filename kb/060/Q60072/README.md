---
layout: page
title: "Q60072: FIX: Duplicate Struc Declaration and /Zi Hangs MASM 5.1, 5.1a"
permalink: /kb/060/Q60072/
---

## Q60072: FIX: Duplicate Struc Declaration and /Zi Hangs MASM 5.1, 5.1a

{% raw %}

	Article: Q60072
	Product(s): Microsoft Macro Assembler
	Version(s): MS-DOS:5.1,5.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.1, 5.1a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Assembler source file has a structure declared twice and the /Zi option
	is used, the Microsoft Macro Assembler versions 5.1 and 5.1a will go into an
	infinite loop.
	
	RESOLUTION
	==========
	
	Remove the duplicate declaration.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM versions 5.1 and 5.1a. This
	problem was corrected in MASM version 6.0.
	
	MORE INFORMATION
	================
	
	The following sample code demonstrates this problem.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	  junk STRUC     ; Declaration of structure 'junk'
	     dw ?
	  junk ENDS
	
	  junk STRUC     ; Duplicate declaration of 'junk'
	     dd ?
	  junk ENDS
	
	       END       ; End of Assembler file
	
	Additional query words: 5.10 5.10a buglist5.10 buglist5.10a fixlist6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM510a
	Version           : MS-DOS:5.1,5.1a
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
