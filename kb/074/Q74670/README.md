---
layout: page
title: "Q74670: FIX: MASM 5.1/5.1a Cause LINK to Put Uninitialized Data in .EXE"
permalink: /kb/074/Q74670/
---

## Q74670: FIX: MASM 5.1/5.1a Cause LINK to Put Uninitialized Data in .EXE

{% raw %}

	Article: Q74670
	Product(s): Microsoft Macro Assembler
	Version(s): winnt:5.10,5.10a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (32-bit), versions 5.10, 5.10a, on platform(s):
	   - the operating system: MS-DOS 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the .DATA? directive with the Microsoft Macro Assembler (MASM)
	versions 5.1 and 5.1a, uninitialized data elements may be incorrectly allocated
	space in the .EXE file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM versions 5.1 and 5.1a. This
	problem was corrected in MASM version 6.0.
	
	MORE INFORMATION
	================
	
	The .DATA? directive indicates the start of the uninitialized data segment, and
	data declared here is not allocated space in the resulting executable file.
	However, when declaring an array of structures under .DATA? in MASM 5.1a, space
	is incorrectly allocated in the .EXE, and the size of the executable program is
	correspondingly increased.
	
	The example code below shows a structure and an array of 100 structure elements
	being declared. The resulting .EXE size is 1616 (the size of the code [516] plus
	1100 [the data size]). However, This amount should only be the code size, 516,
	because these array elements are uninitialized.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	  .MODEL small
	
	  .DATA?
	  testing STRUC
	      a DB 3 DUP(?)
	      b DB 8 DUP(?)
	  testing ENDS
	
	  array testing 100 DUP(<>)
	
	  .CODE
	     mov ax,4C00h
	     int 21h
	  END
	
	Additional query words: 5.10 5.10a 6.00 buglist5.10 buglist5.10a fixlist6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper
	Version           : winnt:5.10,5.10a
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
