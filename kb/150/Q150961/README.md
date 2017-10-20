---
layout: page
title: "Q150961: FIX: Error Accessing Source Code Control System"
permalink: /kb/150/Q150961/
---

## Q150961: FIX: Error Accessing Source Code Control System

{% raw %}

	Article: Q150961
	Product(s): Microsoft SourceSafe
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbide kbSSafe kbVC
	Last Modified: 04-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SourceSafe for Windows NT, version 4.0 
	- Microsoft SourceSafe for Windows, versions 95, 4.0 
	- Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using Developer Studio to check out, get, or add a large number of files
	from Visual SourceSafe 4.0 or 4.0a, the following error may occur:
	
	  Error accessing Source Code Control system. Check Installation
	
	CAUSE
	=====
	
	The Visual SourceSafe integrated with Visual C++ has encountered an error while
	communicating with the Visual SourceSafe server.
	
	RESOLUTION
	==========
	
	You can use any of these solutions:
	
	- Install the Visual SourceSafe server on the same workstation as Visual C++.
	
	- Do not use the integrated Source Code Control features in Visual C++. Simply
	  check in, check out, and get the files using the Visual SourceSafe Explorer.
	
	- Break up your project into small projects.
	
	- Use RegEdit to edit the HKEY_CURRENT_USER\SOFTWARE\Microsoft\Developer\Source
	  Control key, and change the "ProjectThreshold" value to a value larger than
	  the number of files in your project, including dependencies.
	
	  NOTE: Increasing this value impacts overall Source Code Control performance.
	  Only increase this value as much as necessary. This solution works only in
	  rare cases.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was fixed with the Visual SourceSafe patch
	SSSCC.DLL version 1310. To obtain the patch, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q151411 SAMPLE: New Version of Ssscc.dll Available
	
	MORE INFORMATION
	================
	
	This error almost always occurs when the Visual SourceSafe server does not
	reside on the same machine as Visual C++. Furthermore, the problem seems to be
	exacerbated by high network activity during the time that the files are being
	checked out or when a GET is performed.
	
	If you choose not to disable Source Code Control when this error occurs, it
	almost always causes an access violation in Developer Studio.
	
	Additional query words: 4.00a visualc
	
	======================================================================
	Keywords          : kbide kbSSafe kbVC 
	Technology        : kbVCsearch kbVC400 kbSSafeSearch kbAudDeveloper kbZNotKeyword2 kbZNotKeyword3 kbVC410 kbVC32bitSearch
	Version           : 4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
