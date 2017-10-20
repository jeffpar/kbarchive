---
layout: page
title: "Q171538: FIX: Can't Set Property on Interface That Has Attached Root"
permalink: /kb/171/Q171538/
---

## Q171538: FIX: Can't Set Property on Interface That Has Attached Root

{% raw %}

	Article: Q171538
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,97
	Operating System(s): 
	Keyword(s): kbVS97sp2fix kbGrpDSVBDB
	Last Modified: 13-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Studio 97 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Repository will allow you to add an interface to the root object that has
	both a property and a relationship. The Repository won't have problems if you
	add a new relationship to the relationship collection. However, it won't allow
	you to set the property.
	
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
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create an interface that has both a property and relationship.
	
	2. Retrieve the root object's class object and add the interface.
	
	3. Try to set a property from that interface after the TIM has been fully
	  created.
	
	  Note that in Visual Basic, an "Automation Error" occurs.
	
	  In Visual C++, the following error message is returned:
	
	  "Can't set property on repository TIM objects"
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVS97sp2fix kbGrpDSVBDB 
	Technology        : kbVSsearch kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500 kbVS97 kbVS97Search
	Version           : WINDOWS:5.0,97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
