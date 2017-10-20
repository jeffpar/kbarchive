---
layout: page
title: "Q67787: FIX: STRUC Defined Structures Cannot Be Nested"
permalink: /kb/067/Q67787/
---

## Q67787: FIX: STRUC Defined Structures Cannot Be Nested

{% raw %}

	Article: Q67787
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
	
	The STRUC command in the Microsoft Macro Assembler (MASM) versions 5.1 and 5.1a
	does not allow the definition of nested structures. The sample code below shows
	a nested structure definition that gives the following error:
	
	  A2078: Directive illegal in structure
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM versions 5.1 and 5.10a.
	This problem was corrected in MASM version 6.0.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	     .MODEL SMALL
	     .DATA
	  s1 STRUC
	     f1 db ?
	     f2 db ?
	  s1 ENDS
	
	  s2 STRUC
	     f3 db ?
	     s3 s1 <>
	  s2 ENDS
	
	     END
	
	Additional query words: 5.10 5.10a buglist5.10 buglist5.10a fixlist6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM510a
	Version           : MS-DOS:5.1,5.1a
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
