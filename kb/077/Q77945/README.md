---
layout: page
title: "Q77945: FIX: Alignment in Nested Structures Incorrect in MASM 6"
permalink: /kb/077/Q77945/
---

## Q77945: FIX: Alignment in Nested Structures Incorrect in MASM 6

{% raw %}

	Article: Q77945
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
	
	The Microsoft Macro Assembler (MASM) version 6.0 does not pad aligned nested
	structures correctly. The list file shown below illustrates this problem.
	
	RESOLUTION
	==========
	
	Manually padding the structure definition to force the nested structure to have
	the correct alignment will work around this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM version 6.0. This problem
	was corrected in MASM version 6.0a.
	
	MORE INFORMATION
	================
	
	The following code can be used to demonstrate the problem.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: /c /Fl
	
	  .MODEL small, C
	
	  .DATA
	  struct1 STRUCT 2          ; Alignment value is 2
	      field1 WORD ?           ; Offset is 0
	      field2 BYTE ?           ; Offset is 2
	  struct1 ENDS
	
	  struct2 STRUCT 2          ; Alignment value is 2
	      field3 BYTE ?           ; Offset is 0
	      nested struct1 <?, ?>   ; Offset is 1, should
	  struct2 ENDS              ;   be padded to 2
	
	  END
	
	Additional query words: 6.00 buglist6.00 fixlist6.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600
	Version           : MS-DOS:6.0
	
	=============================================================================
	

{% endraw %}
