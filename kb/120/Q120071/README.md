---
layout: page
title: "Q120071: BUG: Record Instance Cannot Have Same Name as a Record Field"
permalink: /kb/120/Q120071/
---

## Q120071: BUG: Record Instance Cannot Have Same Name as a Record Field

{% raw %}

	Article: Q120071
	Product(s): Microsoft Macro Assembler
	Version(s): 6.1,6.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.1, 6.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A record instance cannot have the same name as a record field, but a structure
	can have the same instance name as a structure field. If you give a record the
	same name as a record field, the following error is generated:
	
	  A2008: syntax error
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in MASM versions 6.1 and 6.11. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The following sample code can be used to demonstrate the problem.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	     record1 record recfield1:2, recfield2:2, recfield3:2
	
	     recfield1 record1 <1, 2, 3>  ; <-- syntax error
	
	     structure1 struct
	        strfield1 dw ?
	     structure1 ends
	     strfield1 structure1 <>      ; <-- Ok
	     recfield1 structure1 <>      ; <-- syntax error
	
	Additional query words: 6.10 buglist6.10 buglist6.11
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM610 kbMASM611
	Version           : :6.1,6.11
	
	=============================================================================
	

{% endraw %}
