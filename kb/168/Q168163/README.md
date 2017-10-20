---
layout: page
title: "Q168163: FIX: Memory Leak When Calling UserConnection Query Event"
permalink: /kb/168/Q168163/
---

## Q168163: FIX: Memory Leak When Calling UserConnection Query Event

{% raw %}

	Article: Q168163
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0 97
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp1fix kbVS97sp2fix kbGrpDSVBDB kbvbp500sp1fix kbvbp500sp2fix
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Studio, Enterprise Edition 97 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Repeatedly running queries on UserConnections that use the ODBC cursor library
	causes a memory leak. This problem does not occur when using the other available
	cursor libraries.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in version 3.00.2301 of
	the file odbccr32.dll that is included in Visual Studio 97 Service Pack 1.
	
	For additional information about the Visual Studio 97 Service Pack 1, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q170365 : INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp1fix kbVS97sp2fix kbGrpDSVBDB kbvbp500sp1fix kbvbp500sp2fix 
	Technology        : kbVSsearch kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500 kbVS97 kbVS97Search
	Version           : 5.0 97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
