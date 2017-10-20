---
layout: page
title: "Q92868: FIX: CodeView 4.0 and 4.01 Cannot Debug COM Files"
permalink: /kb/092/Q92868/
---

## Q92868: FIX: CodeView 4.0 and 4.01 Cannot Debug COM Files

{% raw %}

	Article: Q92868
	Product(s): Microsoft Programming Utilities
	Version(s): 
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to debug a COM file with Microsoft CodeView fails.
	
	CAUSE
	=====
	
	Due to an incompatibility between CodeView versions 4.0 and 4.01 and Microsoft
	LINK versions 5.3 and 5.31.009, the symbol offsets stored in the DBG file differ
	by 0x100 from the offsets stored in the symbol table in the COM executable file.
	
	RESOLUTION
	==========
	
	Build the application using the small memory model during the development phase.
	Once the application has been debugged, switch to the tiny memory model for the
	final build.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in CodeView versions 4.0 and 4.01
	for MS-DOS. This problem was corrected in CodeView version 4.1 for MS-DOS.
	
	MORE INFORMATION
	================
	
	COM files are built using the tiny memory model. A COM file combines its logical
	code and data segments into one physical segment. Because the debugging
	information that CodeView requires cannot fit in the physical segment, is it is
	placed into a separate DBG file.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3
	Version           : :
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
