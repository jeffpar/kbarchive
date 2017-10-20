---
layout: page
title: "Q171537: FIX: Bad Error Number Returned if Relationship Doesn't Exist"
permalink: /kb/171/Q171537/
---

## Q171537: FIX: Bad Error Number Returned if Relationship Doesn't Exist

{% raw %}

	Article: Q171537
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,97
	Operating System(s): 
	Keyword(s): kbVS97sp2fix kbGrpDSVBDB
	Last Modified: 18-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the OLE Automation interface, an invalid error number is returned
	if a relationship that doesn't exist is requested.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 3.
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 3, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q175450 INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 3
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Use the Item method to attempt to retrieve a relationship that doesn't exist.
	
	Expected: EREP_RELSHIP_NOTFOUND should be returned.
	
	Results: The correct error description is returned but with an invalid error
	number (0x80020009).
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVS97sp2fix kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500
	Version           : WINDOWS:5.0,97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
